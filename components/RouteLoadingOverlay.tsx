"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 700;
const SAFETY_TIMEOUT_MS = 6000;

function getNavigationUrl(event: MouseEvent): URL | null {
  if (event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;

  const anchor = (event.target as HTMLElement).closest("a");
  if (!anchor || !anchor.href) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname) return null;

  return url;
}

export default function RouteLoadingOverlay() {
  const pathname = usePathname();
  const [targetPathname, setTargetPathname] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const shownAt = useRef<number | null>(null);

  const isNavigating = targetPathname !== null && targetPathname !== pathname;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const url = getNavigationUrl(event);
      if (!url) return;
      shownAt.current = Date.now();
      setVisible(true);
      setTargetPathname(url.pathname);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isNavigating || !visible) return;
    const elapsed = shownAt.current ? Date.now() - shownAt.current : MIN_VISIBLE_MS;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
    const id = setTimeout(() => setVisible(false), remaining);
    return () => clearTimeout(id);
  }, [isNavigating, visible]);

  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(() => setVisible(false), SAFETY_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-5 bg-navy-deep/85 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="heart-loader" />
      <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/70">
        Loading
      </div>
    </div>
  );
}
