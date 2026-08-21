import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { cecAims, cecMission } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community Engagement Core — Research Forward — Howard University RCMI Program",
};

export default function CecPage() {
  return (
    <>
      <PageHero
        eyebrow="RCMI Core · CEC"
        title="Community Engagement Core"
        body="Bridging Howard University investigators with D.C.-area communities so RCMI-supported research addresses the needs and interests of the neighborhoods it studies."
      />

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <Reveal>
          <h2 className="mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            About the core
          </h2>
          <p className="max-w-[74ch] text-[15px] leading-relaxed text-muted">{cecMission}</p>
        </Reveal>

        <Reveal>
          <h2 className="mt-16 mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            Specific aims
          </h2>
        </Reveal>
        <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          {cecAims.map((a, i) => (
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
    </>
  );
}
