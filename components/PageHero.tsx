import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-navy-deep px-6 py-24 text-white md:px-10 md:pt-30 md:pb-18">
      <div className="mx-auto max-w-340">
        <Reveal>
          <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#F0B7C0] before:inline-block before:h-px before:w-5 before:bg-[#F0B7C0] before:content-['']">
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-[22ch] font-fraunces text-[clamp(34px,4.2vw,56px)] font-semibold leading-[1.05] text-white">
            {title}
          </h1>
          <p className="mt-4.5 max-w-[60ch] text-[15.5px] leading-[1.7] text-white/75">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
