import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — Research Forward — Howard University RCMI Program",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilot Project Program"
        title="120+ pilot projects. One pipeline to extramural funding."
        body="A sample of pilot-funded studies moving through Howard's RCMI research pipeline — from first data to R01-level proposals."
      />
      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <CardGrid cards={projects} />
      </section>
    </>
  );
}
