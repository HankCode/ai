"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContentContainer from "@/components/ContentContainer";
import { Button, buttonVariants } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const NavLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Link 1",
    href: "#",
  },
  {
    name: "Link 2",
    href: "#",
  },
];

const NavBar = () => {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<User | null>(null);

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setData(user);
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [supabase.auth]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    setData(null);
  };

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav className="">
      <ContentContainer>
        <div className="mx-auto flex items-center justify-between">
          {/* Primary menu and logo */}
          <div className="flex w-full items-center py-2 lg:py-4">
            <Link href="/" className="flex items-center gap-x-3">
              <img src="/img/ai_logo.png" className="w-[45px]" alt="AI logo" />
            </Link>

            {/* Desktop screen navlinks */}
          </div>
          {/* <div className="hidden lg:flex text-base">
            {NavLinks.map((link, i) => {
              return (
                <Link key={i} href={link.href} className="whitespace-nowrap">
                  <Button variant="ghost">{link.name}</Button>
                </Link>
              );
            })}
          </div> */}
          {/* Desktop screen right menu */}
          <div className="hidden lg:flex items-center justify-between gap-x-4">
            {/* <div>{!session ? "Not signed in" : `Authenticated`}</div> */}
            {data ? (
              <>
                <Link className={buttonVariants({ variant: "ghost" })} href="/portal">
                  Portal
                </Link>
                <Button variant="secondary" onClick={() => logout()}>
                  Logout
                </Button>
              </>
            ) : (
              <Link className={buttonVariants({ variant: "default" })} href="/auth/login">
                Sign in
              </Link>
            )}

            {/* Mobile navigation toggle */}
            <div className="flex items-center transition-all lg:hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile navigation */}
        <div
          className={`fixed z-40 flex w-full origin-top flex-col gap-12 overflow-hidden duration-700 lg:hidden ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="mx-auto mt-20 text-center text-2xl">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              {NavLinks.map((link, i) => {
                return (
                  <Link key={i} href={link.href} onClick={() => setToggleMenu(false)}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};

export default NavBar;
