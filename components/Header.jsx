"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Services", "/#services"],
  ["Solutions", "/#solutions"],
  ["About", "/#about"],
  ["Process", "/#process"],
  ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#303438]/10 bg-[#FBF7F4] text-[#303438] shadow-sm">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative flex h-[72px] w-[180px] shrink-0 items-center overflow-hidden sm:w-[200px] lg:w-[216px]"
          aria-label="NasCore Technologies home"
        >
          <Image
            src="/Logo.png"
            width={216}
            height={72}
            alt="NasCore Technologies"
            priority
            className="
              absolute
              left-1/2
              top-1/2
              h-auto
              w-[205px]
              max-w-none
              -translate-x-1/2
              -translate-y-1/2
              scale-[1.00]
              object-contain
              object-center
              sm:w-[220px]
              lg:w-[230px]
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
                text-sm
                font-medium
                text-[#303438]/80
                transition-colors
                duration-200
                hover:text-[#9A684D]
              "
            >
              {label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="
              ml-2
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#303438]
              px-5
              py-3
              text-sm
              font-bold
              text-[#F7F4EE]
              transition
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#9A684D]
            "
          >
            Start a Project
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-md
            border
            border-[#303438]/15
            text-[#303438]
            transition
            hover:border-[#9A684D]
            hover:text-[#9A684D]
            lg:hidden
          "
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="
            border-t
            border-[#303438]/10
            bg-[#F7F4EE]
            px-5
            py-5
            shadow-xl
            sm:px-6
            lg:hidden
          "
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="
                  rounded-md
                  px-3
                  py-3
                  text-base
                  font-medium
                  text-[#303438]
                  transition
                  hover:bg-[#303438]/5
                  hover:text-[#9A684D]
                "
              >
                {label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="
                mt-4
                flex
                items-center
                justify-center
                rounded-md
                bg-[#303438]
                px-5
                py-3.5
                font-bold
                text-[#F7F4EE]
                transition
                hover:bg-[#9A684D]
              "
            >
              Start a Project
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}