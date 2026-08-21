import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ricAims, ricLeadership, ricMission, ricSubCores } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Infrastructure Core — Research Forward — Howard University RCMI Program",
};

export default function RicPage() {
  return (
    <>
      <PageHero
        eyebrow="RCMI Core · RIC"
        title="Research Infrastructure Core"
        body="Shared instrumentation and computational resources — imaging, proteomics, bioinformatics, and outcomes research — available to every Howard investigator."
      />

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <Reveal>
          <h2 className="mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            About the core
          </h2>
          <p className="max-w-[74ch] text-[15px] leading-relaxed text-muted">{ricMission}</p>
        </Reveal>

        <Reveal>
          <h2 className="mt-16 mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            What the core provides
          </h2>
        </Reveal>
        <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {ricSubCores.map((s, i) => (
            <li key={s.title} className="bg-paper p-7">
              <Reveal delay={i * 80}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-crimson">
                  {s.title}
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <h2 className="mt-16 mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            Specific aims
          </h2>
        </Reveal>
        <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          {ricAims.map((a, i) => (
            <li key={a.code} className="bg-paper p-7">
              <Reveal delay={i * 80}>
                <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-crimson">
                  <span>{a.code}</span>
                  <span className="h-px w-4 bg-crimson/40" />
                  <span>{a.title}</span>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{a.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy-deep py-24 text-white md:py-27.5">
        <div className="mx-auto max-w-340 px-6 md:px-10">
          <Reveal>
            <h2 className="mb-14 font-fraunces text-[clamp(28px,3vw,40px)] font-semibold text-white">
              Core leadership
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ricLeadership.map((p, i) => (
              <Reveal
                key={p.email}
                delay={i * 80}
                className="flex flex-col gap-4 border border-line-light p-7"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-navy">
                  {p.image ? (
                    <Image src={p.image} alt={p.name} fill sizes="56px" className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-fraunces text-[15px] font-semibold text-paper">
                      {p.initials}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-fraunces text-[16px] font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-white/60">
                    {p.role}
                  </div>
                </div>
                <a
                  href={`mailto:${p.email}`}
                  className="text-[13px] font-semibold text-[#F0B7C0] transition-colors hover:text-white"
                >
                  {p.email}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
