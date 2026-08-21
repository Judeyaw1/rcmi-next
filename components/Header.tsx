import Image from "next/image";
import Link from "next/link";
import { cores } from "@/lib/content";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
];

const navLinkClass =
  "relative py-1.5 text-[12.5px] font-semibold uppercase tracking-wider text-ink " +
  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-crimson after:content-[''] " +
  "after:transition-[width] after:duration-300 hover:after:w-full";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-340 items-center justify-between px-6 py-4.5 md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/rcmi2.png"
            alt="Howard University RCMI Program — Research Forward"
            width={728}
            height={181}
            priority
            className="h-7 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-9">
            <li className="group relative">
              <Link href="/cores" className={`inline-flex items-center gap-1.5 ${navLinkClass}`}>
                Cores
                <span className="text-[8px] text-muted transition-transform duration-200 group-hover:rotate-180 group-hover:text-crimson">
                  ▾
                </span>
              </Link>
              <ul
                className="invisible absolute left-0 top-full z-60 min-w-59 -translate-y-1.5 rounded-sm
                  border border-line border-t-2 border-t-crimson bg-paper py-1.5 pb-2.5 opacity-0
                  shadow-[0_24px_48px_-12px_rgba(14,19,48,0.24),0_4px_12px_rgba(14,19,48,0.08)]
                  transition-all duration-200 pointer-events-none
                  group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
              >
                <li className="mb-0.5 border-b border-line px-5 pb-2.5 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  RCMI Cores
                </li>
                {cores.map((core, i) => (
                  <li key={core.id}>
                    <Link
                      href={core.href ?? `/cores#${core.id}`}
                      className="flex items-center gap-3 px-5 py-2.5 text-[12px] uppercase tracking-wide text-ink
                        transition-all duration-150 hover:bg-paper-2 hover:pl-6 hover:text-crimson"
                    >
                      <span className="font-mono text-[10.5px] font-medium text-crimson">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {core.code}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={navLinkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="rounded-sm bg-crimson px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-crimson-deep"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
