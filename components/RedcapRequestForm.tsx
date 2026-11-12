"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  STUDENT_EMAIL_DOMAIN,
  applyBranching,
  emptyRedcapRequest,
  fees,
  serviceOptions,
  validateRedcapRequest,
  type RedcapRequestErrors,
  type RedcapRequestValues,
} from "@/lib/redcapRequest";
import RecaptchaCheckbox, {
  type RecaptchaHandle,
} from "@/components/RecaptchaCheckbox";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type Field = keyof RedcapRequestValues;

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-crimson";
const labelClass =
  "mb-1.5 block font-mono text-[10.5px] uppercase tracking-widest text-muted";

const yesNo = [
  { value: "1", label: "Yes" },
  { value: "0", label: "No" },
];

export default function RedcapRequestForm() {
  const [values, setValues] = useState<RedcapRequestValues>(emptyRedcapRequest);
  const [errors, setErrors] = useState<RedcapRequestErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<RecaptchaHandle>(null);

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function focusFirstError(errs: RedcapRequestErrors) {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => {
      const el = formRef.current?.querySelector<HTMLElement>(
        `[data-field="${first}"]`,
      );
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.querySelector<HTMLElement>("input, button, canvas")?.focus({
        preventScroll: true,
      });
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");
    const payload = applyBranching(values);
    const nextErrors = validateRedcapRequest(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/redcap-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, website: honeypot, recaptchaToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // reCAPTCHA tokens are single-use, so make the user tick the box again.
        recaptchaRef.current?.reset();
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors);
        }
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setServerError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center animate-success-pop">
        <svg viewBox="0 0 52 52" className="h-16 w-16 text-crimson" aria-hidden>
          <circle
            cx="26"
            cy="26"
            r="24"
            pathLength={100}
            className="animate-check-circle fill-none stroke-current stroke-2"
          />
          <path
            d="M14 27l7 7 16-16"
            pathLength={100}
            className="animate-check-mark fill-none stroke-current stroke-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="mt-5 font-fraunces text-[24px] font-semibold text-navy">
          Request submitted.
        </h3>
        <p className="mx-auto mt-3 max-w-[48ch] text-[14.5px] leading-relaxed text-muted">
          Thank you, {values.redsf_fnofsr.trim()}. If all required information
          has been received, you can expect your REDCap login credentials within
          48–72 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(emptyRedcapRequest);
            setErrors({});
            setSubmitted(false);
          }}
          className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-crimson"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const isStudent = values.redsf_stu === "1";
  const isNonStudent = values.redsf_stu === "0";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative">
      {submitting && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-paper/85 backdrop-blur-[2px]">
          <div className="heart-loader" />
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
            Submitting your request…
          </div>
        </div>
      )}

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div
        aria-hidden
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <Section number="01" title="Service">
        <Choice
          field="red_serreq"
          label="Services requested"
          options={serviceOptions}
          value={values.red_serreq}
          error={errors.red_serreq}
          onChange={update}
          columns
        />
      </Section>

      <Section number="02" title="REDCap Project">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <TextInput
            field="redsf_fnofsr"
            label="First name"
            autoComplete="given-name"
            values={values}
            errors={errors}
            onChange={update}
          />
          <TextInput
            field="redsf_lnofsr"
            label="Last name"
            autoComplete="family-name"
            values={values}
            errors={errors}
            onChange={update}
          />
          <TextInput
            field="redsf_email"
            label="Email"
            type="email"
            autoComplete="email"
            values={values}
            errors={errors}
            onChange={update}
            className="md:col-span-2"
          />
          <TextInput
            field="redsf_pron"
            label="Title of project / study"
            values={values}
            errors={errors}
            onChange={update}
            className="md:col-span-2"
          />
          <TextInput
            field="redsf_startd"
            label="Study start date"
            type="date"
            values={values}
            errors={errors}
            onChange={update}
          />
          <TextInput
            field="redsf_pcor"
            label="REDCap project expiration date"
            type="date"
            values={values}
            errors={errors}
            onChange={update}
          />

          <Choice
            field="redsf_dhavf"
            label="Do you have a funding source for this project?"
            options={yesNo}
            value={values.redsf_dhavf}
            error={errors.redsf_dhavf}
            onChange={update}
            className="md:col-span-2"
          />
          {values.redsf_dhavf === "1" && (
            <TextInput
              field="redsf_fun"
              label="Project / study funding source"
              values={values}
              errors={errors}
              onChange={update}
              className="md:col-span-2"
            />
          )}

          <Choice
            field="redsf_pi"
            label="Are you the Principal Investigator?"
            options={yesNo}
            value={values.redsf_pi}
            error={errors.redsf_pi}
            onChange={update}
            className="md:col-span-2"
          />
          {values.redsf_pi === "0" && (
            <TextInput
              field="redsf_npi"
              label="Name of Principal Investigator"
              values={values}
              errors={errors}
              onChange={update}
              className="md:col-span-2"
            />
          )}
        </div>
      </Section>

      <Section number="03" title="Type of Service">
        <Choice
          field="redsf_stu"
          label="Are you a Howard University student?"
          options={yesNo}
          value={values.redsf_stu}
          error={errors.redsf_stu}
          onChange={update}
        />

        {isStudent && (
          <div className="mt-7 grid gap-7">
            <p className="border-l-2 border-crimson bg-paper-2 px-5 py-4 text-[14px] leading-relaxed text-ink">
              {fees.studentWaiver}
            </p>
            <TextInput
              field="red_stuemail"
              label="Howard University student email"
              type="email"
              placeholder={`yourname${STUDENT_EMAIL_DOMAIN}`}
              values={values}
              errors={errors}
              onChange={update}
            />
          </div>
        )}

        {isNonStudent && (
          <div className="mt-7 grid gap-6">
            <Agreement
              field="redsf_setup"
              text={fees.setup}
              checked={values.redsf_setup === "1"}
              error={errors.redsf_setup}
              onChange={update}
            />
            <Agreement
              field="redsf_main"
              text={fees.maintenance}
              checked={values.redsf_main === "1"}
              error={errors.redsf_main}
              onChange={update}
            />
            <div className="border border-line p-5">
              <p className="mb-4 text-[14px] leading-relaxed text-ink">
                {fees.customization}
              </p>
              <Choice
                field="redsf_ratre"
                label="Will your project need customization or expert support?"
                options={yesNo}
                value={values.redsf_ratre}
                error={errors.redsf_ratre}
                onChange={update}
              />
            </div>
          </div>
        )}
      </Section>

      <Section number="04" title="Signature" last>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <TextInput
            field="red_pnamev2"
            label="Print name (optional)"
            autoComplete="name"
            values={values}
            errors={errors}
            onChange={update}
          />
          <TextInput
            field="red_sdatev2"
            label="Date"
            type="date"
            values={values}
            errors={errors}
            onChange={update}
          />
          <div className="md:col-span-2" data-field="red_sigv2">
            <span className={labelClass}>Signature</span>
            <SignaturePad
              value={values.red_sigv2}
              onChange={(v) => update("red_sigv2", v)}
            />
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
              By signing, I agree to the terms of this document. My electronic
              signature is legally binding.
            </p>
            <FieldError message={errors.red_sigv2} />
          </div>
        </div>
      </Section>

      <div data-field="confirm_robot" className="mb-7">
        {RECAPTCHA_SITE_KEY ? (
          <RecaptchaCheckbox
            ref={recaptchaRef}
            siteKey={RECAPTCHA_SITE_KEY}
            onChange={(token) => {
              setRecaptchaToken(token);
              update("confirm_robot", token ? "1" : "");
            }}
          />
        ) : (
          <label
            className={`inline-flex cursor-pointer select-none items-center gap-4 rounded-sm border bg-white px-5 py-4 shadow-[0_1px_3px_rgba(14,19,48,0.08)] transition-colors ${
              errors.confirm_robot
                ? "border-crimson"
                : "border-line hover:border-crimson/50"
            }`}
          >
            <input
              type="checkbox"
              checked={values.confirm_robot === "1"}
              onChange={(e) =>
                update("confirm_robot", e.target.checked ? "1" : "")
              }
              className="h-5 w-5 shrink-0 accent-crimson"
            />
            <span className="text-[14px] font-medium text-ink">
              I am not a robot
            </span>
          </label>
        )}
        <FieldError message={errors.confirm_robot} />
      </div>

      {serverError && (
        <p
          role="alert"
          className="mb-5 border-l-2 border-crimson bg-crimson/5 px-4 py-3 text-[13.5px] text-crimson"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep disabled:opacity-60"
      >
        Submit Request →
      </button>
    </form>
  );
}

function Section({
  number,
  title,
  last,
  children,
}: {
  number: string;
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <fieldset
      className={`min-w-0 ${last ? "mb-9" : "mb-12 border-b border-line pb-12"}`}
    >
      <legend className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-crimson">
        <span>{number}</span>
        <span className="inline-block h-px w-5 bg-crimson" />
        <span>{title}</span>
      </legend>
      {children}
    </fieldset>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span className="mt-1.5 block text-[12.5px] text-crimson">{message}</span>
  );
}

function TextInput({
  field,
  label,
  type = "text",
  placeholder,
  autoComplete,
  className = "",
  values,
  errors,
  onChange,
}: {
  field: Field;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  values: RedcapRequestValues;
  errors: RedcapRequestErrors;
  onChange: (field: Field, value: string) => void;
}) {
  return (
    <label className={`block ${className}`} data-field={field}>
      <span className={labelClass}>{label}</span>
      <input
        type={type}
        value={values[field]}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!errors[field]}
        onChange={(e) => onChange(field, e.target.value)}
        className={inputClass}
      />
      <FieldError message={errors[field]} />
    </label>
  );
}

function Choice({
  field,
  label,
  options,
  value,
  error,
  onChange,
  columns,
  className = "",
}: {
  field: Field;
  label: string;
  options: readonly { value: string; label: string }[];
  value: string;
  error?: string;
  onChange: (field: Field, value: string) => void;
  columns?: boolean;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      data-field={field}
      className={className}
    >
      <span className={labelClass}>{label}</span>
      <div
        className={`mt-2.5 grid gap-2.5 ${columns ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:flex sm:flex-wrap"}`}
      >
        {options.map((o) => {
          const selected = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(field, o.value)}
              className={`rounded-sm border px-4 py-3 text-left text-[13.5px] transition-colors sm:min-w-24 ${
                selected
                  ? "border-crimson bg-crimson text-white"
                  : "border-line bg-transparent text-ink hover:border-crimson/50"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      <FieldError message={error} />
    </div>
  );
}

function Agreement({
  field,
  text,
  checked,
  error,
  onChange,
}: {
  field: Field;
  text: string;
  checked: boolean;
  error?: string;
  onChange: (field: Field, value: string) => void;
}) {
  return (
    <div data-field={field}>
      <label
        className={`flex cursor-pointer gap-4 border p-5 transition-colors ${
          checked
            ? "border-crimson bg-crimson/4"
            : "border-line hover:border-crimson/50"
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(field, e.target.checked ? "1" : "")}
          className="mt-1 h-4 w-4 shrink-0 accent-crimson"
        />
        <span className="text-[14px] leading-relaxed text-ink">{text}</span>
      </label>
      <FieldError message={error} />
    </div>
  );
}

function SignaturePad({
  value,
  onChange,
}: {
  value: string;
  onChange: (dataUrl: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  // Size the canvas backing store to its CSS size × devicePixelRatio.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(ratio, ratio);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#0e1330";
    };
    resize();
    // Resizing clears the canvas, so the stored signature is cleared too.
    const onResize = () => {
      resize();
      onChange("");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clear the drawing when the form resets the value.
  useEffect(() => {
    if (value) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  }, [value]);

  function point(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function start(e: React.PointerEvent<HTMLCanvasElement>) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    last.current = point(e);
    const ctx = e.currentTarget.getContext("2d");
    if (ctx && last.current) {
      ctx.beginPath();
      ctx.arc(last.current.x, last.current.y, 1.1, 0, Math.PI * 2);
      ctx.fillStyle = "#0e1330";
      ctx.fill();
    }
  }

  function move(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || !last.current) return;
    const ctx = e.currentTarget.getContext("2d");
    const p = point(e);
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    last.current = p;
  }

  function end(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    onChange(e.currentTarget.toDataURL("image/png"));
  }

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        tabIndex={0}
        aria-label="Signature pad — draw your signature with a mouse, finger, or stylus"
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
        className="block h-40 w-full touch-none rounded-sm border border-dashed border-line bg-white outline-none focus:border-crimson"
      />
      {!value && (
        <span className="pointer-events-none absolute inset-x-0 bottom-4 text-center font-mono text-[10.5px] uppercase tracking-widest text-muted/70">
          Sign here
        </span>
      )}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-3 text-[11.5px] font-semibold uppercase tracking-wider text-crimson"
        >
          Clear
        </button>
      )}
    </div>
  );
}
