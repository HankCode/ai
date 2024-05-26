// components/Layout.js
"use client";

const nav_links = [
  { name: "Feed", href: "/portal" },
  { name: "My desires", href: "/portal/desires" },
  { name: "My profile", href: "#" },
];

type NavLink = {
  name: string;
  href: string;
};

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <nav
        className={`bg-gray-100 ${
          isMobile
            ? "fixed bottom-0 w-full flex justify-around py-4"
            : "fixed left-0 top-0 bottom-0 w-48 flex flex-col gap-2 px-4 pt-8"
        }`}
      >
        {nav_links.map((link: NavLink) => (
          <Link key={link.href} href={link.href} className={`${isMobile && ""}`}>
            {link.name}
          </Link>
        ))}
      </nav>

      <main className={`flex-grow ${isMobile ? "mt-0 mb-12" : "ml-48 p-4"}`}>{children}</main>
    </div>
  );
};

export default Layout;
