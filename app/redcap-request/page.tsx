import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import RedcapRequestForm from "@/components/RedcapRequestForm";

export const metadata: Metadata = {
  title: "REDCap Service Request — Research Forward — Howard University RCMI Program",
  description:
    "Request a REDCap project, additional users, a renewal, or a data science consult from the Howard University RCMI Program.",
};

const feeRows = [
  { label: "Project set-up", price: "$700 / project / yr", note: "Up to 3 users · $200 per additional user" },
  { label: "Maintenance & hosting", price: "$500 / project / yr", note: "Up to 3 users · $100 per additional user" },
  { label: "Customization & expert support", price: "$120 / hour", note: "Estimate provided before work begins" },
];

const capabilities = [
  "Exports to Excel, SPSS, SAS, Stata and R",
  "Branching logic and calculated fields",
  "File uploads and scheduling modules",
  "Project setup and reusable standard forms",
  "Custom reports and data integration",
];

export default function RedcapRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="REDCap Services"
        title="Request a REDCap project."
        body="REDCap is a secure, web-based application for building and managing online research surveys and databases. The RCMI Program provides REDCap to the Howard University community — complete the form below to request access."
      />

      <section className="bg-navy-deep pb-24 text-white md:pb-27.5">
        <div className="mx-auto grid max-w-340 grid-cols-1 gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-10">
          <Reveal>
            <div className="md:sticky md:top-32">
              <h2 className="max-w-[18ch] font-fraunces text-[clamp(26px,2.8vw,36px)] font-semibold leading-[1.1] text-white">
                What&apos;s included
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-[14.5px] leading-relaxed text-white/75">
                    <span className="mt-2.5 inline-block h-px w-3 shrink-0 bg-[#F0B7C0]" />
                    {c}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 mb-4 font-mono text-[10.5px] uppercase tracking-widest text-white/45">
                Administrative fees
              </h3>
              <div className="border border-line-light">
                {feeRows.map((f) => (
                  <div key={f.label} className="border-b border-line-light px-5 py-4 last:border-b-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="text-[14px] font-semibold text-white">{f.label}</span>
                      <span className="font-mono text-[12.5px] text-[#F0B7C0]">{f.price}</span>
                    </div>
                    <p className="mt-1 text-[12.5px] text-white/55">{f.note}</p>
                  </div>
                ))}
                <div className="bg-white/5 px-5 py-4">
                  <span className="text-[14px] font-semibold text-white">Howard University students</span>
                  <p className="mt-1 text-[12.5px] text-white/55">
                    Setup, customization, maintenance and hosting at no cost.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-[13.5px] leading-relaxed text-white/60">
                Questions about REDCap?{" "}
                <a
                  href="mailto:RedCap@howard.edu"
                  className="font-semibold text-[#F0B7C0] transition-colors hover:text-white"
                >
                  RedCap@howard.edu
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-paper p-7 text-ink shadow-[0_32px_64px_-16px_rgba(10,14,40,0.45)] md:p-10">
              <RedcapRequestForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
