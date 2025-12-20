"use client";

import { useEffect } from "react";
import Nav from "./nav";

interface LayoutWrapperProps {
  children: React.ReactNode;
  isTransparent?: boolean;
}

export default function LayoutWrapper({
  children,
  isTransparent = false,
}: LayoutWrapperProps) {
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

  return (
    <>
      <Nav />
      <div className="mb-8">
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
