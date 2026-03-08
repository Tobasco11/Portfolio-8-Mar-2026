"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <div className="nav">
      <div className="container navInner">
        <Link href="/" className="brandLink">
          <span className="dot" />
          <span>Ahmed M. Othman</span>
        </Link>

        <div className="links">
          <Link className="pill" href="/" aria-current={path === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link className="pill" href="/projects" aria-current={path === "/projects" ? "page" : undefined}>
            Projects
          </Link>
          <a className="pill" href="/cv.pdf" target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </div>
    </div>
  );
}