import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Research Forward — Howard University RCMI Program",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Services"
        title="Request time, expertise, or funding from any core."
        body="Every RCMI core offers direct services to Howard investigators. Submit a request through the core contact below — most requests receive an initial response within 5 business days."
      />
      <section className="mx-auto max-w-340 px-6 py-24 md:px-10 md:py-27.5">
        <CardGrid
          cards={services.map((s) => ({
            ...s,
            metaLinkText: "Request service →",
            metaLinkHref: "mailto:rcmi@howard.edu",
          }))}
        />
      </section>
    </>
  );
}
