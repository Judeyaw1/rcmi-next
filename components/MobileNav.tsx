"use client";

import { useState } from "react";
import Link from "next/link";
import { cores } from "@/lib/content";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [coresOpen, setCoresOpen] = useState(false);

  function close() {
    setOpen(false);
    setCoresOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="relative z-60 flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-px w-5 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-ink transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-line bg-paper shadow-[0_16px_32px_-8px_rgba(14,19,48,0.18)]">
          <ul className="flex flex-col px-6 py-2">
            <li className="border-b border-line">
              <button
                type="button"
                onClick={() => setCoresOpen((v) => !v)}
                aria-expanded={coresOpen}
                className="flex w-full items-center justify-between py-3.5 text-[13px] font-semibold uppercase tracking-wider text-ink"
              >
                Cores
                <span
                  className={`text-[10px] text-muted transition-transform duration-200 ${
                    coresOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {coresOpen && (
                <ul className="flex flex-col pb-3 pl-1">
                  {cores.map((core, i) => (
                    <li key={core.id}>
                      <Link
                        href={core.href ?? `/cores#${core.id}`}
                        onClick={close}
                        className="flex items-center gap-3 py-2.5 text-[12px] uppercase tracking-wide text-muted transition-colors hover:text-crimson"
                      >
                        <span className="font-mono text-[10.5px] font-medium text-crimson">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {core.code}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-line last:border-b-0">
                <Link
                  href={l.href}
                  onClick={close}
                  className="block py-3.5 text-[13px] font-semibold uppercase tracking-wider text-ink transition-colors hover:text-crimson"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
