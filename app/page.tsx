import Link from "next/link";
import PulseStrip from "@/components/PulseStrip";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHead from "@/components/SectionHead";
import CardGrid from "@/components/CardGrid";
import Reveal from "@/components/Reveal";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import { cores, news, impactStats, goals } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[88vh] min-h-140 items-end overflow-hidden bg-[#050816]">
        <HeroCarousel
          images={[
            "/images/IMG_8682.jpeg.webp",
            "/images/rcmi1.jpg",
            "/images/Howard-Hero-Slideshow-02.jpg.webp",
          ]}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,20,0.5)0%,rgba(4,7,20,0.38)42%,rgba(4,7,20,0.1)72%,rgba(4,7,20,0)100%),linear-gradient(180deg,rgba(4,7,20,0.25)0%,rgba(4,7,20,0.04)44%,rgba(4,7,20,0.15)100%)]" />
        <div className="relative z-2 mx-auto flex w-full max-w-340 items-end px-6 pb-18 pt-28 text-white md:px-10">
          <div className="max-w-205 border-l border-white/12 pl-5 md:pl-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#F0B7C0]">
                <span className="inline-block h-8 w-1 bg-crimson" />
                Howard University · RCMI Program
              </div>
            </Reveal>
            <h1 className="max-w-[15ch] font-fraunces text-[clamp(36px,5vw,68px)] font-semibold leading-[0.97] tracking-[-0.02em] text-white">
              <Reveal as="span" delay={100} className="block">
                Advancing health equity
              </Reveal>
              <Reveal as="span" delay={240} className="block">
                through <em className="text-crimson not-italic">rigorous</em>
              </Reveal>
              <Reveal as="span" delay={380} className="block">
                research infrastructure.
              </Reveal>
            </h1>
            <Reveal delay={500}>
              <div className="mt-6 h-px w-22 bg-crimson" />
            </Reveal>
            <Reveal delay={560}>
              <p className="mt-6 max-w-[44ch] text-[14.5px] leading-relaxed text-white/80 md:text-[15.5px]">
                We build the cores, train the investigators, and fund the pilot science that moves
                minority health and health-disparities research forward from bench to community.
              </p>
            </Reveal>
            <Reveal delay={660}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Link
                  href="/cores"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
                >
                  Explore Our Cores →
                </Link>
                <SmoothScrollLink
                  targetId="vision"
                  className="inline-flex items-center gap-2.5 rounded-sm border border-white/28 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  Our Mission
                </SmoothScrollLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PulseStrip />

      <section id="vision" className="grid grid-cols-1 bg-navy-deep text-white md:grid-cols-[1.1fr_0.9fr]">
        <div className="ml-auto max-w-160 px-6 py-16 md:px-16 md:py-24">
          <Reveal>
            <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#F0B7C0] before:inline-block before:h-px before:w-5 before:bg-[#F0B7C0] before:content-['']">
              Our Vision &amp; Goals
            </div>
            <h2 className="mt-5 mb-6.5 font-fraunces text-[clamp(32px,3.6vw,48px)] font-semibold leading-[1.05] text-white">
              A research ecosystem built for investigators who look like the communities they study.
            </h2>
            <p className="mb-4.5 text-[15.5px] leading-[1.75] text-white/72">
              The RCMI Program strengthens Howard University&apos;s capacity to conduct high-impact
              biomedical, behavioral, and translational research — closing gaps in minority health
              through shared instrumentation, mentored pilot awards, and community-engaged science.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-col">
            {goals.map((g, i) => (
              <li
                key={g.code}
                className="flex gap-4.5 border-t border-line-light py-4.5 text-[14.5px] text-white/86 last:border-b"
              >
                <Reveal delay={i * 80} className="flex gap-4.5">
                  <span className="shrink-0 pt-0.5 font-mono text-[13px] text-crimson">
                    {g.code}
                  </span>
                  {g.text}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative min-h-80 bg-cover bg-center after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(10,14,40,0.15),rgba(10,14,40,0.55))] after:content-['']"
          style={{
            backgroundImage:
              "url('/images/hp0.jpg')",
          }}
        />
      </section>

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5" id="cores">
        <SectionHead
          title="Six cores. One shared infrastructure."
          body="Every core is open to Howard investigators and affiliated partners — built to lower the barrier between an idea and a funded study."
        />
        <CardGrid cards={cores.map((c) => ({ code: c.code, title: c.title, body: c.body }))} />
      </section>

      <section className="bg-crimson text-white">
        <div className="mx-auto grid max-w-340 grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="font-fraunces text-[clamp(32px,3.4vw,52px)] font-semibold">{s.num}</div>
              <div className="mt-2 font-mono text-[12.5px] uppercase tracking-wide text-white/85">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <SectionHead
          title="Latest from the program."
          body="News, publications, and events from across the RCMI research community."
        />
        <div className="grid grid-cols-1 gap-9 md:grid-cols-[1.2fr_1fr_1fr]">
          {news.slice(0, 3).map((n, i) => (
            <div key={n.title} className="border-t border-line pt-5.5">
              <Reveal delay={i * 80}>
                <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-crimson before:inline-block before:h-px before:w-5 before:bg-crimson before:content-['']">
                  {n.tag}
                </div>
                <h3 className="mb-2.5 font-fraunces text-[19px] font-semibold leading-tight text-navy">
                  {n.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-muted">{n.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
