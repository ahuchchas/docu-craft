"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";

export default function Header({ docs }) {
  const [showMenu, setShowMenu] = useState(false);

  // Effect to set initial state of the menu based on screen size
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      setShowMenu(true);
    }
  }, []);

  // Event listener to update menu state when window is resized
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1024) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      <Logo />

      <div className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div className="container flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <Search docs={docs} />

          <div className="flex items-center gap-5 lg:hidden">
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
              aria-label="Toggle navigation"
            >
              <Image
                src="/hamburger.svg"
                alt="Menu"
                className="w-2.5 stroke-zinc-900 dark:stroke-white"
                width={20}
                height={30}
                onClick={() => setShowMenu(!showMenu)}
              />
            </button>
            <Link aria-label="Home" href="/">
              <Image
                src="/logo.svg"
                alt="Protocol"
                className="h-6"
                width={84}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>

      {showMenu && <Sidebar docs={docs} />}
    </header>
  );
}
