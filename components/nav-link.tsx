"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-semibold text-base py-2 px-4 mx-1 rounded no-underline tracking-tight ${
        isActive ? "text-accent bg-main" : ""
      }`}
    >
      {children}
    </Link>
  );
}
