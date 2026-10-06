import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PublicationYearGroup from "@/components/PublicationYearGroup";
import { publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications — Research Forward — Howard University RCMI Program",
};

export default function PublicationsPage() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <>
      <PageHero
        eyebrow="Peer-Reviewed Research"
        title={`${publications.length} publications from the RCMI research community.`}
        body="Peer-reviewed work by Howard University investigators, supported by RCMI cores, pilot funding, and shared infrastructure — spanning cancer biology, virology, health disparities, and computational biology."
      />

      <section className="mx-auto max-w-225 px-6 py-24 md:px-10 md:py-27.5">
        <div className="relative">
          <div className="absolute top-1 bottom-1 left-1.75 w-px bg-line md:left-2.25" />

          <div className="flex flex-col gap-16">
            {years.map((year) => (
              <PublicationYearGroup
                key={year}
                year={year}
                items={publications.filter((p) => p.year === year)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
