"use client";

import { useState, type FormEvent } from "react";
import { cores } from "@/lib/content";

type FormValues = {
  name: string;
  email: string;
  core: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  core: "General Inquiry",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Enter a message.";
  return errors;
}

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-crimson";
const labelClass = "mb-1.5 block font-mono text-[10.5px] uppercase tracking-widest text-muted";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <h3 className="font-fraunces text-[22px] font-semibold text-navy">Message received.</h3>
        <p className="mx-auto mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-muted">
          Thanks, {values.name.split(" ")[0]} — the RCMI Program office will get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setSubmitted(false);
          }}
          className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-crimson"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-crimson before:inline-block before:h-px before:w-5 before:bg-crimson before:content-['']">
        Send a Message
      </div>
      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
          />
          {errors.name && (
            <span className="mt-1.5 block text-[12.5px] text-crimson">{errors.name}</span>
          )}
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
          />
          {errors.email && (
            <span className="mt-1.5 block text-[12.5px] text-crimson">{errors.email}</span>
          )}
        </label>

        <label className="block md:col-span-2">
          <span className={labelClass}>Which core is this about?</span>
          <div className="relative">
            <select
              value={values.core}
              onChange={(e) => updateField("core", e.target.value)}
              className={`${inputClass} appearance-none pr-6`}
            >
              <option>General Inquiry</option>
              {cores.map((c) => (
                <option key={c.id}>{c.title}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-muted">
              ▾
            </span>
          </div>
        </label>

        <label className="block md:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea
            rows={5}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <span className="mt-1.5 block text-[12.5px] text-crimson">{errors.message}</span>
          )}
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
          >
            Send Message →
          </button>
        </div>
      </form>
    </div>
  );
}
