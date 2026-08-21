import Reveal from "@/components/Reveal";

export default function SectionHead({ title, body }: { title: string; body: string }) {
  return (
    <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-10">
      <h2 className="max-w-[16ch] font-fraunces text-[clamp(30px,3.2vw,44px)] font-semibold leading-[1.05]">
        {title}
      </h2>
      <p className="max-w-[38ch] text-[14.5px] leading-relaxed text-muted">{body}</p>
    </Reveal>
  );
}
