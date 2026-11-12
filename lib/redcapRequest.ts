// Field definitions for the REDCap service request form.
//
// Keys match the variable names in the "Howard University RCMI Research Support
// Portal" REDCap project ("Redcap Service Form" instrument, plus the
// "Services Requested" field), so a validated submission can be imported into
// REDCap as-is through its API.

export const serviceOptions = [
  { value: "1", label: "REDCap Project Request" },
  { value: "2", label: "REDCap Project Additional Users" },
  { value: "3", label: "REDCap Project Renewal" },
  { value: "4", label: "Data Science & Informatics Consult" },
] as const;

export const fees = {
  setup:
    "Project Set-Up: I agree to $700 per project per year for up to 3 users, then $200 per user per year for each additional user. Includes one year of hosting, systems maintenance and daily backups.",
  maintenance:
    "Maintenance and Hosting: I agree to $500 per year per project for up to 3 users, then $100 per additional user per year. Includes hosting, system maintenance, routine support, and daily backups.",
  customization:
    "Customization and expert support: Provided at the rate of $120 per hour for projects requiring customized solutions and extensive support, including automated batch upload of data, custom report creation, custom software development, and systems integration using the REDCap APIs. An estimate of the required hours will be provided before the initiation of work.",
  studentWaiver:
    "As a Howard University student, I acknowledge that project setup, customization, maintenance, and hosting are provided at no cost.",
};

export const STUDENT_EMAIL_DOMAIN = "@bison.howard.edu";

export type RedcapRequestValues = {
  red_serreq: string; // Services Requested
  redsf_startd: string; // Study Start Date (YYYY-MM-DD)
  redsf_fnofsr: string; // Requestor First Name
  redsf_lnofsr: string; // Requestor Last Name
  redsf_email: string; // Requestor Email
  redsf_pron: string; // Title of Project / Study
  redsf_dhavf: string; // Has funding source? 1/0
  redsf_fun: string; // Funding source (if redsf_dhavf = 1)
  redsf_pi: string; // Are you the PI? 1/0
  redsf_npi: string; // Name of PI (if redsf_pi = 0)
  redsf_pcor: string; // REDCap Project Expiration Date
  redsf_stu: string; // Howard student? 1/0
  red_stuemail: string; // Student email (if redsf_stu = 1)
  redsf_setup: string; // Agree to set-up fee (if redsf_stu = 0) — "1"
  redsf_main: string; // Agree to maintenance fee (if redsf_stu = 0) — "1"
  redsf_ratre: string; // Customization & expert support 1/0 (if redsf_stu = 0)
  red_pnamev2: string; // Print Name
  red_sigv2: string; // Signature (PNG data URL)
  red_sdatev2: string; // Signature date (YYYY-MM-DD)
  confirm_robot: string; // "I am not a robot" — "1"
};

export type RedcapRequestErrors = Partial<Record<keyof RedcapRequestValues, string>>;

export const emptyRedcapRequest: RedcapRequestValues = {
  red_serreq: "",
  redsf_startd: "",
  redsf_fnofsr: "",
  redsf_lnofsr: "",
  redsf_email: "",
  redsf_pron: "",
  redsf_dhavf: "",
  redsf_fun: "",
  redsf_pi: "",
  redsf_npi: "",
  redsf_pcor: "",
  redsf_stu: "",
  red_stuemail: "",
  redsf_setup: "",
  redsf_main: "",
  redsf_ratre: "",
  red_pnamev2: "",
  red_sigv2: "",
  red_sdatev2: "",
  confirm_robot: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SIGNATURE_RE = /^data:image\/png;base64,[A-Za-z0-9+/=]+$/;
const MAX_SIGNATURE_LENGTH = 700_000;

/** Applies the REDCap branching logic: fields whose condition is false are blanked. */
export function applyBranching(v: RedcapRequestValues): RedcapRequestValues {
  const out = { ...v };
  if (out.redsf_dhavf !== "1") out.redsf_fun = "";
  if (out.redsf_pi !== "0") out.redsf_npi = "";
  if (out.redsf_stu !== "1") out.red_stuemail = "";
  if (out.redsf_stu !== "0") {
    out.redsf_setup = "";
    out.redsf_main = "";
    out.redsf_ratre = "";
  }
  return out;
}

export function validateRedcapRequest(raw: RedcapRequestValues): RedcapRequestErrors {
  const v = applyBranching(raw);
  const e: RedcapRequestErrors = {};
  const blank = (s: string) => !s.trim();

  if (!serviceOptions.some((o) => o.value === v.red_serreq)) e.red_serreq = "Choose a service.";

  if (!DATE_RE.test(v.redsf_startd)) e.redsf_startd = "Enter the study start date.";
  if (blank(v.redsf_fnofsr)) e.redsf_fnofsr = "Enter your first name.";
  if (blank(v.redsf_lnofsr)) e.redsf_lnofsr = "Enter your last name.";
  if (blank(v.redsf_email)) e.redsf_email = "Enter your email.";
  else if (!EMAIL_RE.test(v.redsf_email.trim())) e.redsf_email = "Enter a valid email address.";
  if (blank(v.redsf_pron)) e.redsf_pron = "Enter the project or study title.";

  if (v.redsf_dhavf !== "1" && v.redsf_dhavf !== "0") e.redsf_dhavf = "Choose yes or no.";
  if (v.redsf_dhavf === "1" && blank(v.redsf_fun)) e.redsf_fun = "Enter the funding source.";

  if (v.redsf_pi !== "1" && v.redsf_pi !== "0") e.redsf_pi = "Choose yes or no.";
  if (v.redsf_pi === "0" && blank(v.redsf_npi)) e.redsf_npi = "Enter the PI's name.";

  if (!DATE_RE.test(v.redsf_pcor)) e.redsf_pcor = "Enter the project expiration date.";
  else if (DATE_RE.test(v.redsf_startd) && v.redsf_pcor < v.redsf_startd)
    e.redsf_pcor = "Expiration date must be after the start date.";

  if (v.redsf_stu !== "1" && v.redsf_stu !== "0") e.redsf_stu = "Choose yes or no.";
  if (v.redsf_stu === "1") {
    const email = v.red_stuemail.trim().toLowerCase();
    if (!email) e.red_stuemail = "Enter your Howard student email.";
    else if (!EMAIL_RE.test(email) || !email.endsWith(STUDENT_EMAIL_DOMAIN))
      e.red_stuemail = `Use your ${STUDENT_EMAIL_DOMAIN} email address.`;
  }
  if (v.redsf_stu === "0") {
    if (v.redsf_setup !== "1") e.redsf_setup = "You must agree to the set-up fee.";
    if (v.redsf_main !== "1") e.redsf_main = "You must agree to the maintenance fee.";
    if (v.redsf_ratre !== "1" && v.redsf_ratre !== "0") e.redsf_ratre = "Choose yes or no.";
  }

  if (!v.red_sigv2) e.red_sigv2 = "Sign in the box above.";
  else if (v.red_sigv2.length > MAX_SIGNATURE_LENGTH || !SIGNATURE_RE.test(v.red_sigv2))
    e.red_sigv2 = "Signature could not be read. Clear it and sign again.";
  if (!DATE_RE.test(v.red_sdatev2)) e.red_sdatev2 = "Enter today's date.";
  if (v.confirm_robot !== "1") e.confirm_robot = "Please confirm that you are human.";

  return e;
}

/** Coerces an untrusted JSON body into the value shape (unknown keys dropped). */
export function parseRedcapRequest(body: unknown): RedcapRequestValues {
  const src = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const out = { ...emptyRedcapRequest };
  for (const key of Object.keys(out) as (keyof RedcapRequestValues)[]) {
    const val = src[key];
    out[key] = typeof val === "string" ? (key === "red_sigv2" ? val : val.slice(0, 500)) : "";
  }
  return out;
}
