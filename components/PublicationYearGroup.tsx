"use client";

import { useState } from "react";
import type { Publication } from "@/lib/content";

export default function PublicationYearGroup({
  year,
  items,
  defaultOpen = false,
}: {
  year: number;
  items: Publication[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <div className="relative mb-10 flex items-center">
        <span className="absolute top-1.5 left-0 h-3.75 w-3.75 rounded-full bg-crimson ring-4 ring-paper md:h-4.75 md:w-4.75" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-4 pl-9 text-left md:pl-11"
        >
          <h2 className="font-fraunces text-[clamp(30px,3.4vw,44px)] font-semibold text-navy">
            {year}
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
            {items.length} {items.length === 1 ? "publication" : "publications"}
          </span>
          <span
            className={`text-[28px] leading-none text-crimson transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-8 pl-9 md:pl-11">
            {items.map((p, i) => (
              <li
                key={p.url + i}
                className="border-t border-line pt-6 first:border-t-0 first:pt-0"
              >
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wide text-crimson">
                  {p.category}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-fraunces text-[16px] font-semibold leading-snug text-navy transition-colors hover:text-crimson"
                >
                  {p.title}
                </a>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{p.citation}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
