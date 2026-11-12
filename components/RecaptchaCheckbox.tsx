"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

// Google reCAPTCHA v2 "I'm not a robot" checkbox.
// https://developers.google.com/recaptcha/docs/display

type Grecaptcha = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => number;
  reset: (id?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    __onRecaptchaLoad?: () => void;
  }
}

const SCRIPT_ID = "google-recaptcha";
let loader: Promise<Grecaptcha> | null = null;

function loadRecaptcha(): Promise<Grecaptcha> {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    window.__onRecaptchaLoad = () => resolve(window.grecaptcha!);
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      loader = null;
      script.remove();
      reject(new Error("reCAPTCHA failed to load"));
    };
    document.head.appendChild(script);
  });
  return loader;
}

export type RecaptchaHandle = { reset: () => void };

const RecaptchaCheckbox = forwardRef<
  RecaptchaHandle,
  { siteKey: string; onChange: (token: string) => void }
>(function RecaptchaCheckbox({ siteKey, onChange }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
      onChangeRef.current("");
    },
  }));

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha()
      .then((g) => {
        const el = containerRef.current;
        if (cancelled || !el || widgetId.current !== null) return;
        widgetId.current = g.render(el, {
          sitekey: siteKey,
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(""),
          "error-callback": () => onChangeRef.current(""),
        });
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [siteKey]);

  if (failed) {
    return (
      <p className="text-[13px] text-crimson">
        The &ldquo;I&apos;m not a robot&rdquo; check couldn&apos;t load. Disable any content
        blockers for this page and reload.
      </p>
    );
  }

  return <div ref={containerRef} className="min-h-19.5" />;
});

export default RecaptchaCheckbox;
