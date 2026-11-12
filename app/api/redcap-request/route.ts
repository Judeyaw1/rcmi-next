import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { applyBranching, parseRedcapRequest, validateRedcapRequest } from "@/lib/redcapRequest";

const MAX_BODY_BYTES = 1_000_000;

export async function POST(request: NextRequest) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const values = applyBranching(parseRedcapRequest(body));
  const errors = validateRedcapRequest(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    const token = typeof body.recaptchaToken === "string" ? body.recaptchaToken : "";
    const human = token && (await verifyRecaptcha(recaptchaSecret, token, request));
    if (!human) {
      return NextResponse.json(
        {
          error: "Please complete the “I'm not a robot” check.",
          errors: { confirm_robot: "Please confirm that you are human." },
        },
        { status: 400 },
      );
    }
  }

  const apiUrl = process.env.REDCAP_API_URL;
  const token = process.env.REDCAP_API_TOKEN;

  if (!apiUrl || !token) {
    if (process.env.NODE_ENV !== "production") {
      const { red_sigv2, ...rest } = values;
      console.info("[redcap-request] REDCap API not configured; submission not sent:", {
        ...rest,
        red_sigv2: `${red_sigv2.length} chars`,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json(
      { error: "Online requests are temporarily unavailable. Please email RedCap@howard.edu." },
      { status: 503 },
    );
  }

  try {
    const recordId = await importRecord(apiUrl, token, values);
    await importSignature(apiUrl, token, recordId, values.red_sigv2).catch((err) => {
      // The request itself is saved; staff can collect the signature separately.
      console.error(`[redcap-request] Signature upload failed for record ${recordId}:`, err);
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[redcap-request] REDCap import failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit your request right now. Please try again or email RedCap@howard.edu." },
      { status: 502 },
    );
  }
}

async function importRecord(
  apiUrl: string,
  token: string,
  values: ReturnType<typeof parseRedcapRequest>,
): Promise<string> {
  const recordIdField = process.env.REDCAP_RECORD_ID_FIELD || "name_id";
  const { red_sigv2: _signature, ...fields } = values;
  void _signature;

  const record = {
    [recordIdField]: "new",
    ...Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.trim()])),
    redcap_service_form_complete: "2",
  };

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: new URLSearchParams({
      token,
      content: "record",
      action: "import",
      format: "json",
      type: "flat",
      overwriteBehavior: "normal",
      forceAutoNumber: "true",
      returnContent: "auto_ids",
      returnFormat: "json",
      data: JSON.stringify([record]),
    }),
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) throw new Error(`REDCap responded ${res.status}: ${text.slice(0, 500)}`);

  const recordId = parseAutoId(text);
  if (!recordId) throw new Error(`Unexpected REDCap response: ${text.slice(0, 500)}`);
  return recordId;
}

// REDCap returns auto_ids as ["<new id>,<submitted id>"] (JSON) or CSV text.
function parseAutoId(text: string): string | null {
  let first: unknown = text;
  try {
    const parsed = JSON.parse(text);
    first = Array.isArray(parsed) ? parsed[0] : parsed;
    if (first && typeof first === "object") first = Object.values(first)[0];
  } catch {
    first = text.split("\n").find((line) => line.trim() && !/^id\b/i.test(line));
  }
  if (typeof first !== "string" && typeof first !== "number") return null;
  const id = String(first).split(",")[0].trim();
  return id || null;
}

async function importSignature(apiUrl: string, token: string, recordId: string, dataUrl: string) {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const form = new FormData();
  form.set("token", token);
  form.set("content", "file");
  form.set("action", "import");
  form.set("record", recordId);
  form.set("field", "red_sigv2");
  form.set("returnFormat", "json");
  form.set(
    "file",
    new Blob([Buffer.from(base64, "base64")], { type: "image/png" }),
    "signature.png",
  );

  const res = await fetch(apiUrl, { method: "POST", body: form, cache: "no-store" });
  if (!res.ok) throw new Error(`REDCap responded ${res.status}: ${(await res.text()).slice(0, 500)}`);
}

// https://developers.google.com/recaptcha/docs/verify
async function verifyRecaptcha(secret: string, token: string, request: NextRequest) {
  const params = new URLSearchParams({ secret, response: token });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) params.set("remoteip", ip);
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
      cache: "no-store",
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("[redcap-request] reCAPTCHA rejected:", data["error-codes"]);
    return data.success === true;
  } catch (err) {
    console.error("[redcap-request] reCAPTCHA verification failed:", err);
    return false;
  }
}
