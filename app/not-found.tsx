import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found — Research Forward — Howard University RCMI Program",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-navy-deep px-6 py-24 text-center text-white md:px-10">
      <Image
        src="/images/rcmi2.png"
        alt=""
        aria-hidden="true"
        width={728}
        height={181}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(1400px,180vw)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06] brightness-0 invert"
      />
      <Reveal className="relative mx-auto max-w-140 flex flex-col items-center">
        <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#F0B7C0] before:inline-block before:h-px before:w-5 before:bg-[#F0B7C0] before:content-['']">
          Error 404
        </div>
        <h1 className="mt-6 font-fraunces text-[clamp(56px,9vw,104px)] font-semibold leading-none text-white">
          404
        </h1>
        <p className="mt-5 font-fraunces text-[clamp(22px,2.4vw,30px)] font-semibold leading-tight text-white">
          This page hasn&apos;t been built yet.
        </p>
        <p className="mt-4 max-w-[46ch] text-[14.5px] leading-relaxed text-white/70">
          The page you&apos;re looking for doesn&apos;t exist, may have moved, or is still in
          progress. Try one of the links below.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
          >
            Back to Home →
          </Link>
          <Link
            href="/cores"
            className="inline-flex items-center gap-2.5 rounded-sm border border-white/50 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/12"
          >
            Explore Our Cores
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
