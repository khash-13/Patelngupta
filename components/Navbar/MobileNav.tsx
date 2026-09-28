"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuMenu } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { links } from "@/lib/data";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when viewport becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Menu Button */}
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-zinc-200
              bg-white
              text-zinc-800
              shadow-sm
              transition-all duration-300
              hover:border-zinc-300
              hover:shadow-md
            "
          >
            <LuMenu className="h-5 w-5" />
          </button>
        </SheetTrigger>

        {/* Menu */}
        <SheetContent
          side="right"
          closeIcon={false}
          className="
            flex
            w-[88%] max-w-[420px]
            flex-col
            border-l border-zinc-200
            bg-white
            p-0
            text-zinc-900
            shadow-2xl
          "
        >
          {/* Header */}
          <SheetTitle
            className="
              flex
              items-center
              justify-between
              border-b border-zinc-100
              px-6 py-5
            "
          >
            <span className="text-sm font-semibold tracking-wide">
              MENU
            </span>

            <SheetClose asChild>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-zinc-200
                  text-lg
                  font-light
                  text-zinc-600
                  transition-all duration-300
                  hover:bg-zinc-100
                  hover:text-zinc-950
                "
              >
                ×
              </button>
            </SheetClose>
          </SheetTitle>

          {/* Navigation */}
          <nav
            className="
              flex-1
              overflow-y-auto
              px-6 py-7
            "
          >
            <div className="flex flex-col">
              {links.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <div
                    key={index}
                    className="border-b border-zinc-100 last:border-none"
                  >
                    {!link.pages ? (
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`
                            group
                            flex
                            min-h-[58px]
                            items-center
                            justify-between
                            py-4
                            text-lg
                            capitalize
                            transition-colors duration-300
                            ${
                              isActive
                                ? "font-semibold text-zinc-950"
                                : "font-normal text-zinc-600 hover:text-zinc-950"
                            }
                          `}
                        >
                          <span>{link.head}</span>

                          <MdArrowOutward
                            className="
                              h-4 w-4
                              text-zinc-300
                              transition-all duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-zinc-700
                            "
                          />
                        </Link>
                      </SheetClose>
                    ) : (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="border-none"
                        >
                          <AccordionTrigger
                            className={`
                              min-h-[58px]
                              py-4
                              text-lg
                              font-normal
                              capitalize
                              hover:no-underline
                              ${
                                isActive
                                  ? "font-semibold text-zinc-950"
                                  : "text-zinc-600"
                              }
                            `}
                          >
                            {link.head}
                          </AccordionTrigger>

                          <AccordionContent className="pb-4">
                            <div className="ml-3 flex flex-col gap-1 border-l border-zinc-200 pl-5">
                              {link.pages.map(
                                (page, pageIndex) => {
                                  const pageActive =
                                    pathname === page.href;

                                  return (
                                    <SheetClose
                                      asChild
                                      key={pageIndex}
                                    >
                                      <Link
                                        href={page.href}
                                        onClick={closeMenu}
                                        className={`
                                          py-2.5
                                          text-sm
                                          capitalize
                                          transition-colors duration-300
                                          ${
                                            pageActive
                                              ? "font-medium text-zinc-950"
                                              : "text-zinc-500 hover:text-zinc-900"
                                          }
                                        `}
                                      >
                                        {page.head}
                                      </Link>
                                    </SheetClose>
                                  );
                                }
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Contact */}
          <div
            className="
              border-t border-zinc-100
              bg-zinc-50/70
              px-6
              py-7
            "
          >
            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-zinc-400
              "
            >
              Get in touch
            </p>

            <div className="grid grid-cols-2 gap-3">
              {/* Call */}
              <a
                href="tel:+917312405500"
                onClick={closeMenu}
                className="
                  group
                  rounded-xl
                  border border-zinc-200
                  bg-white
                  p-4
                  transition-all duration-300
                  hover:border-zinc-300
                  hover:shadow-sm
                "
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#7977C6]/10">
                  <BsTelephone className="h-4 w-4 text-[#7977C6]" />
                </div>

                <p className="mb-1 text-xs font-medium text-zinc-900">
                  Call
                </p>

                <p className="text-[11px] leading-5 text-zinc-500">
                  0731-2405500
                </p>

                <p className="text-[11px] leading-5 text-zinc-500">
                  0731-2405511
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917647867870"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  group
                  rounded-xl
                  border border-zinc-200
                  bg-white
                  p-4
                  transition-all duration-300
                  hover:border-[#25D366]/40
                  hover:shadow-sm
                "
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                </div>

                <p className="mb-1 text-xs font-medium text-zinc-900">
                  WhatsApp
                </p>

                <p className="text-[11px] leading-5 text-zinc-500">
                  7647867870
                </p>

                <p className="text-[11px] leading-5 text-zinc-500">
                  8959155000
                </p>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
