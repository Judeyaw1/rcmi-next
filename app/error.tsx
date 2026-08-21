"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-navy-deep px-6 py-24 text-center text-white md:px-10">
      <div className="mx-auto flex max-w-140 flex-col items-center">
        <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#F0B7C0] before:inline-block before:h-px before:w-5 before:bg-[#F0B7C0] before:content-['']">
          Something went wrong
        </div>
        <h1 className="mt-6 font-fraunces text-[clamp(28px,3.2vw,40px)] font-semibold leading-tight text-white">
          This page hit an unexpected error.
        </h1>
        <p className="mt-4 max-w-[46ch] text-[14.5px] leading-relaxed text-white/70">
          Try reloading the page. If the problem continues, head back to the homepage.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-sm border border-white/50 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/12"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
