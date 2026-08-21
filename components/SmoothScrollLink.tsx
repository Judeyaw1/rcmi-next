"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function SmoothScrollLink({
  targetId,
  children,
  ...props
}: {
  targetId: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  return (
    <a
      {...props}
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}
