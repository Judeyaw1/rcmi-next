import Image from "next/image";
import Link from "next/link";

type FooterLink = { label: string; href: string };

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="mb-4.5 font-mono text-[11.5px] uppercase tracking-widest text-white/45">
        {title}
      </h4>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="block py-1.5 text-[14px] text-white/75 transition-colors hover:text-white"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-340 grid-cols-1 gap-10 px-6 pb-10 pt-20 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/rcmi2.png"
            alt="Howard University RCMI Program — Research Forward"
            width={728}
            height={181}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4.5 max-w-[34ch] text-[13.5px] leading-relaxed text-white/55">
            The RCMI Program at Howard University builds shared research infrastructure to advance
            minority health and health-disparities science.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://twitter.com/HowardRcmi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Howard RCMI on X (Twitter)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <FooterCol
          title="Program"
          links={[
            { label: "Cores", href: "/cores" },
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
            { label: "Publications", href: "/publications" },
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            { label: "Pilot Funding", href: "/pilot-funding" },
            { label: "News", href: "/news" },
            { label: "Events", href: "/events" },
          ]}
        />
        <div>
          <h4 className="mb-4.5 font-mono text-[11.5px] uppercase tracking-widest text-white/45">
            Contact
          </h4>
          <a
            href="mailto:rcmi@howard.edu"
            className="block py-1.5 text-[14px] text-white/75 transition-colors hover:text-white"
          >
            rcmi@howard.edu
          </a>
          <span className="block py-1.5 text-[14px] text-white/75">Washington, D.C.</span>
          <span className="block py-1.5 text-[14px] text-white/75">Howard University</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-340 items-center justify-between border-t border-line-light px-6 py-6 text-[12px] text-white/40 md:px-10">
        <span>© 2026 Howard University RCMI Program</span>
        <div className="flex items-center gap-6">
          <Link href="/admin-console" className="transition-colors hover:text-white/70">
            Admin
          </Link>
          <span>Research Forward</span>
        </div>
      </div>
    </footer>
  );
}
