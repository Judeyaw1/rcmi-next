import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { idcAims, idcContact, idcMission } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investigator Development Core — Research Forward — Howard University RCMI Program",
};

export default function IdcPage() {
  return (
    <>
      <PageHero
        eyebrow="RCMI Core · IDC"
        title="Investigator Development Core"
        body="A tri-faceted career development program that accelerates junior faculty and early-stage investigators toward independent, extramurally funded research."
      />

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.6fr]">
          <div>
            <Reveal>
              <h2 className="mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
                About the core
              </h2>
              <p className="max-w-[74ch] text-[15px] leading-relaxed text-muted">{idcMission}</p>
            </Reveal>

            <Reveal>
              <h2 className="mt-16 mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
                Specific aims
              </h2>
            </Reveal>
            <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
              {idcAims.map((a, i) => (
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
          </div>

          <div>
            <Reveal>
              <h2 className="mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
                Core contact
              </h2>
              <div className="flex flex-col gap-4 border border-line bg-paper p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-fraunces text-[16px] font-semibold text-paper">
                  {idcContact.initials}
                </div>
                <div>
                  <div className="font-fraunces text-[17px] font-semibold text-navy">
                    {idcContact.name}
                  </div>
                  <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-muted">
                    {idcContact.role}
                  </div>
                </div>
                <a
                  href={`mailto:${idcContact.email}`}
                  className="text-[13px] font-semibold text-crimson"
                >
                  {idcContact.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
