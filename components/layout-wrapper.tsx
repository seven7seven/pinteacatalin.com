"use client";

import { useEffect, useState } from "react";
import Nav from "./nav";

interface LayoutWrapperProps {
  children: React.ReactNode;
  isTransparent?: boolean;
}

export default function LayoutWrapper({
  children,
  isTransparent = false,
}: LayoutWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isTransparent) {
      document.body.classList.add("transparent");
    } else {
      document.body.classList.remove("transparent");
    }

    return () => {
      document.body.classList.remove("transparent");
    };
  }, [isTransparent]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Nav isScrolled={isScrolled} />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <h1
          className="text-[32px] text-light text-center mb-2"
          style={{
            fontFamily: "var(--font-recursive), monospace",
            fontWeight: 550,
            fontVariationSettings: "'MONO' 0, 'CASL' 0.3, 'slnt' 0, 'CRSV' 0",
          }}
        >
          Pintea Cătălin
        </h1>
      </div>
      <div>{children}</div>
    </>
  );
}
