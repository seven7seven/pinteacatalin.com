"use client";

import NavLink from "./nav-link";

interface NavProps {
  isScrolled?: boolean;
  noSpacer?: boolean;
}

export default function Nav({ isScrolled = false, noSpacer = false }: NavProps) {
  return (
    <>
      {!noSpacer && <div className="h-14" />} {/* Spacer for fixed nav */}
      <div
        className="fixed top-0 left-0 w-full z-50 h-14 flex justify-center items-center bg-dark/20 backdrop-blur-xs"
      >
        <div className="flex items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/photography">Photography</NavLink>
        </div>
      </div>
    </>
  );
}
