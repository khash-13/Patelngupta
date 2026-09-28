"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { links } from "@/lib/data";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar: React.FC<{ appName?: string }> = ({
  appName = "LOGO",
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`
        sticky top-0 z-[999]
        w-full
        border-b
        transition-all duration-300
        ${
          isScrolled
            ? "border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
            : isHome
              ? "border-transparent bg-white"
              : "border-transparent bg-[#E7E8F4]"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-[68px] w-full max-w-[1600px]
          items-center justify-between
          px-5
          sm:px-7
          md:h-[72px] md:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${appName} home`}
          className="
            relative z-10
            flex h-11 w-40
            shrink-0 items-center
            overflow-hidden
            transition-transform duration-300
            hover:scale-[1.02]
            sm:w-44
            md:h-12 md:w-48
            lg:w-52
          "
        >
          <Image
            src="/logo.png"
            alt={appName}
            width={1920}
            height={1080}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList
            className="
              flex items-center
              gap-1
              xl:gap-2
            "
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <NavigationMenuItem key={index}>
                  {link.pages ? (
                    <>
                      <NavigationMenuTrigger
                        className={`
                          h-10
                          bg-transparent
                          px-3
                          text-[15px]
                          font-normal
                          capitalize
                          text-zinc-700
                          hover:bg-zinc-100
                          hover:text-zinc-950
                          data-[state=open]:bg-zinc-100
                          data-[state=open]:text-zinc-950
                          ${
                            isActive
                              ? "font-medium text-zinc-950"
                              : ""
                          }
                        `}
                      >
                        {link.head}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <div
                          className="
                            grid
                            min-w-[180px]
                            gap-1
                            rounded-xl
                            bg-white
                            p-2
                          "
                        >
                          {link.pages.map((page, pageIndex) => {
                            const pageActive =
                              pathname === page.href;

                            return (
                              <Link
                                key={pageIndex}
                                href={page.href}
                                className={`
                                  rounded-lg
                                  px-3 py-2
                                  text-[15px]
                                  capitalize
                                  transition-colors duration-200
                                  ${
                                    pageActive
                                      ? "bg-zinc-100 font-medium text-zinc-950"
                                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                                  }
                                `}
                              >
                                {page.head}
                              </Link>
                            );
                          })}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={`
                          relative
                          flex h-10
                          items-center
                          rounded-lg
                          px-3
                          text-[15px]
                          font-normal
                          capitalize
                          text-zinc-700
                          transition-colors duration-200
                          hover:bg-zinc-100
                          hover:text-zinc-950
                          ${
                            isActive
                              ? "font-medium text-zinc-950"
                              : ""
                          }
                        `}
                      >
                        {link.head}

                        {isActive && (
                          <span
                            className="
                              absolute
                              bottom-1
                              left-1/2
                              h-1
                              w-1
                              -translate-x-1/2
                              rounded-full
                              bg-[#7977C6]
                            "
                          />
                        )}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/917647867870"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-zinc-200
              text-[#25D366]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#25D366]
              hover:bg-[#25D366]/5
            "
          >
            <FaWhatsapp className="h-[18px] w-[18px]" />
          </Link>

          {/* Hotline */}
          <Link
            href="tel:+917312405500"
            className="
              group
              flex items-center gap-3
              rounded-full
              border border-zinc-200
              bg-white
              px-3 py-2
              transition-all duration-300
              hover:border-zinc-300
              hover:shadow-sm
            "
          >
            <div
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                bg-[#7977C6]/10
                transition-colors duration-300
                group-hover:bg-[#7977C6]/15
              "
            >
              <BsTelephone className="h-4 w-4 text-[#7977C6]" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="mb-1 text-[9px] font-medium uppercase tracking-wider text-zinc-400">
                Hotline
              </span>

              <span className="text-[15px] font-semibold text-zinc-800">
                0731-2405500
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;