import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";
import { cores } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cores — Research Forward — Howard University RCMI Program",
};

export default function CoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared Research Infrastructure"
        title="Six cores. One shared infrastructure."
        body="Every core is open to Howard investigators and affiliated partners — built to lower the barrier between an idea and a funded study. Explore what each core offers and how to request access."
      />
      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <CardGrid
          cards={cores.map((c) => ({
            id: c.id,
            code: c.code,
            title: c.title,
            body: c.body,
            meta: c.href ? undefined : "Core Director: Dr. —",
            metaLinkText: c.href ? "Meet the team →" : "Request access →",
            metaLinkHref: c.href ?? "mailto:rcmi@howard.edu",
          }))}
        />
      </section>
    </>
  );
}
