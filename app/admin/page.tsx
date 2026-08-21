import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { adminFunctions, adminStaff } from "@/lib/content";

export const metadata: Metadata = {
  title: "Administrative Core — Research Forward — Howard University RCMI Program",
};

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="RCMI Core · Admin"
        title="Administrative Core"
        body="The operational backbone of the RCMI Program — coordinating leadership, funding, and reporting across every core, pilot award, and community partnership."
      />

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <h2 className="mb-6 font-fraunces text-[clamp(24px,2.4vw,32px)] font-semibold">
          What the core does
        </h2>
        <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {adminFunctions.map((f, i) => (
            <li key={f.title} className="bg-paper p-7">
              <Reveal delay={i * 80}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-crimson">
                  {f.title}
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy-deep py-24 text-white md:py-27.5">
        <div className="mx-auto max-w-340 px-6 md:px-10">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-10">
            <h2 className="max-w-[16ch] font-fraunces text-[clamp(30px,3.2vw,44px)] font-semibold leading-[1.05] text-white">
              Program leadership
            </h2>
            <p className="max-w-[38ch] text-[14.5px] leading-relaxed text-white/72">
              The team setting strategic direction for the RCMI Program and representing Howard
              University to NIH and NIMHD.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adminStaff.map((s, i) => (
              <Reveal key={s.email} delay={i * 80} className="group flex flex-col">
                <div className="relative aspect-3/4 w-full overflow-hidden bg-navy">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
                    className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,14,40,0) 40%, rgba(10,14,40,0.94) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="font-fraunces text-[17px] font-semibold text-white">
                      {s.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-white/70">
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 border-t border-line-light bg-navy px-5 py-4 text-[12.5px]">
                  <a
                    href={`mailto:${s.email}`}
                    className="wrap-break-word font-semibold text-[#F0B7C0] transition-colors hover:text-white"
                  >
                    {s.email}
                  </a>
                  <a
                    href={`tel:${s.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-white/60"
                  >
                    {s.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
