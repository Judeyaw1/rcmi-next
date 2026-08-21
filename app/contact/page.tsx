import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { cores } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Research Forward — Howard University RCMI Program",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact the RCMI Program."
        body="Reach the program office directly, or connect with the core most relevant to your research."
      />

      <section className="bg-navy-deep py-24 text-white md:py-27.5">
        <div className="mx-auto grid max-w-340 grid-cols-1 gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10">
          <Reveal>
            <h2 className="max-w-[18ch] font-fraunces text-[clamp(28px,3vw,40px)] font-semibold leading-[1.08] text-white">
              Send us a message.
            </h2>
            <p className="mt-4 max-w-[42ch] text-[14.5px] leading-relaxed text-white/70">
              We typically respond within 1–2 business days. For a specific core, use the
              directory below instead.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div>
                <h4 className="mb-1.5 font-mono text-[10.5px] uppercase tracking-widest text-white/45">
                  Address
                </h4>
                <p className="text-[14.5px] leading-relaxed text-white/80">
                  Howard University · RCMI Program
                  <br />
                  2400 6th St NW
                  <br />
                  Washington, D.C. 20059
                </p>
              </div>
              <div>
                <h4 className="mb-1.5 font-mono text-[10.5px] uppercase tracking-widest text-white/45">
                  Email
                </h4>
                <a
                  href="mailto:rcmi@howard.edu"
                  className="text-[14.5px] font-semibold text-[#F0B7C0] transition-colors hover:text-white"
                >
                  rcmi@howard.edu
                </a>
              </div>
              <div>
                <h4 className="mb-1.5 font-mono text-[10.5px] uppercase tracking-widest text-white/45">
                  Office Hours
                </h4>
                <p className="text-[14.5px] leading-relaxed text-white/80">
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM ET
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-paper p-8 shadow-[0_32px_64px_-16px_rgba(10,14,40,0.45)] md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <Reveal>
          <h2 className="mb-10 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
            Reach a specific core
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {cores.map((c, i) => (
            <div key={c.id} className="bg-paper p-9 transition-colors hover:bg-paper-2">
              <Reveal delay={i * 80}>
                <div className="font-mono text-[12.5px] tracking-wide text-crimson">{c.code}</div>
                <h3 className="mt-5 mb-3.5 font-fraunces text-[20px] font-semibold text-navy">
                  {c.title}
                </h3>
                <a
                  href={`mailto:${c.email}`}
                  className="text-[13.5px] font-semibold text-crimson"
                >
                  {c.email} →
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
