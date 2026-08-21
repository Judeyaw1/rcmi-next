import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News — Research Forward — Howard University RCMI Program",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Program News"
        title="Latest from the program."
        body="News, publications, and events from across the RCMI research community."
      />
      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
          {news.map((n) => (
            <div key={n.title} className="border-t border-line pt-5.5">
              <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-crimson before:inline-block before:h-px before:w-5 before:bg-crimson before:content-['']">
                {n.tag}
              </div>
              <h3 className="mb-2.5 font-fraunces text-[19px] font-semibold leading-tight text-navy">
                {n.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted">{n.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
