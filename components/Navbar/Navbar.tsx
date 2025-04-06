"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { links } from "@/lib/data";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const Navbar: React.FC<{ appName?: string }> = ({ appName = "LOGO" }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 83);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[999] h-[60px] w-full flex-between ${
        isScrolled ? "bg-white" : pathname === "/" ? "bg-white" : "bg-[#E7E8F4]"
      } text-black p-2 px-4 md:px-6 lg:px-20 xl:px-28 2xl:px-32 transition-colors duration-300`}
    >
      <Link
        href="/"
        className="w-48 md:w-60 h-fit animate-slide-down overflow-hidden"
      >
        <Image
          src="/logo.png"
          alt="logo"
          // width={200}
          // height={200}
          width={1920}
          height={1080}
          loading="eager"
          priority
          className="w-fit h-fit"
        />
      </Link>

      <MobileNav />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="relative hidden md:flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10 animate-slide-down text-md font-thin">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <NavigationMenuItem key={index} className="">
                {link.pages ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent border-none outline-none p-1">
                      <Link
                        href={link.href}
                        legacyBehavior
                        passHref
                        className={`capitalize cursor-pointer hover-link ${
                          isActive ? "font-semibold active" : ""
                        } ease-in-out duration-200`}
                      >
                        {link.head}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-fit space-y-2 p-2">
                      {link.pages.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                          <div key={index} className="w-24">
                            <Link
                              href={link.href}
                              className={`w-fit capitalize cursor-pointer hover-link ${
                                isActive ? "font-semibold active" : ""
                              } ease-in-out duration-200`}
                            >
                              {link.head}
                            </Link>
                          </div>
                        );
                      })}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`capitalize cursor-pointer hover-link ${
                        isActive ? "font-semibold active" : ""
                      } ease-in-out duration-200`}
                    >
                      {link.head}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {/* <nav className="relative hidden md:flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10 animate-slide-down text-sm font-thin">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={index} className="relative">
              <Link
                href={link.href}
                className={`capitalize cursor-pointer hover-link ${
                  isActive ? "font-semibold active" : ""
                } ease-in-out duration-200`}
              >
                {link.head}
              </Link>
              {link.pages && (
                <div className="absolute z-50 -bottom-10 w-full h-full br"></div>
              )}
            </div>
          );
        })}
      </nav> */}

      <Link
        href={"tel:+917647867870"}
        className="relative hidden animate-slide-down group w-fit h-10 md:h-14 lg:flex items-center gap-2 p-1 overflow-hidden"
      >
        <div className="w-8 h-8 lg:w-10 lg:h-10 p-1 flex-center rounded-full bg-[#7a77c641] group-hover:bg-transparent group-hover:border group-hover:border-[#7a77c6d2] ease-in-out duration-300">
          <BsTelephone
            size={20}
            className="group-hover:fill-[#7a77c6d2] ease-in-out duration-300"
          />
        </div>
        <div className="hidden md:flex flex-col w-fit h-full py-0.5">
          <span className="text-xs">Hotline 24/7</span>
          <span className="md:text-lg lg:text-xl font-medium">
            +91 7647867870
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
