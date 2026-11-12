import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="mb-12 flex flex-col gap-5 border border-line border-l-2 border-l-crimson bg-paper-2 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-mono text-[12.5px] tracking-wide text-crimson">REDCap</div>
            <h3 className="mt-2 font-fraunces text-[22px] font-semibold text-navy">
              Need a REDCap project, more users, or a renewal?
            </h3>
            <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-muted">
              Request secure survey and database projects, additional users, renewals, or a data
              science &amp; informatics consult online.
            </p>
          </div>
          <Link
            href="/redcap-request"
            className="shrink-0 self-start rounded-sm bg-crimson px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-crimson-deep md:self-center"
          >
            Request REDCap →
          </Link>
        </div>
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
