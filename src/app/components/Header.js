"use client";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "mx-auto w-full",
        "transition-all duration-300",
        isScrolled
          ? "bg-[#0F0F10]/85 backdrop-blur border-b border-[#EDEDED]/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        {/* Brand */}
        <a
          href="#homepage"
          className="font-mont text-sm tracking-wide hover:opacity-90 transition"
        >
          <span className="text-[#C86A2A]">Cameron</span>{" "}
          <span className="text-[#EDEDED]/90">Hilliard</span>
        </a>

        {/* Actions */}
        <nav className="flex items-center gap-3">
          {/* <DarkModeToggle /> */}
          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
