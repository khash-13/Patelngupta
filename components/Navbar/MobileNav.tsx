"use client";

import React, { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { links } from "@/lib/data";
import { BsTelephone } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { MdOutlineMail } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { LuMenu } from "react-icons/lu";

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 770) {
      setOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild className="w-fit h-fit overflow-hidden">
          <div
            onClick={handleMenuClick}
            className="w-fit h-fit border border-black rounded-md animate-slide-down"
          >
            <LuMenu size={35} />
          </div>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="bg-[#5C5B79] text-white backdrop-blur-lg border-none outline-none p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] space-y-4"
          closeIcon={false}
        >
          <SheetTitle className="w-full h-fit flex flex-col items-end text-white">
            <SheetClose className="text-4xl font-thin mr-2 outline-none border-none">
              X
            </SheetClose>
          </SheetTitle>

          <div className="h-fit flex flex-col gap-6 pt-5 overflow-hidden">
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <div
                  key={index}
                  className="cursor-pointer z-50"
                  onClick={handleLinkClick}
                >
                  {!link.pages ? (
                    <Link href={link.href}>
                      <SheetClose
                        className={`w-fit capitalize text-2xl ${
                          isActive
                            ? "font-semibold border-b"
                            : "active:translate-y-0.5"
                        }`}
                      >
                        {link.head}
                      </SheetClose>
                    </Link>
                  ) : (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full -mt-3"
                    >
                      <AccordionItem value="item-1" className="outline-none">
                        <AccordionTrigger className="w-full text-2xl outline-none">
                          {link.head}
                        </AccordionTrigger>
                        <AccordionContent className="w-full flex flex-col text-xl">
                          {link.pages.map((p, index) => (
                            <Link href={p.href} key={index}>
                              <SheetClose>{p.head}</SheetClose>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              );
            })}
          </div>

          <div className="w-full h-fit pt-5 py-2 space-y-2">
            <h2 className="text-lg">Get in touch</h2>
            <div className="space-y-2">
              {contact.map((contact, index) => (
                <Link
                  href={contact.href}
                  key={index}
                  className="relative flex items-center gap-2 px-2"
                >
                  <div className="w-14 h-14 rounded-full underline underline-offset-8 flex-center ease-in-out duration-300">
                    {contact.icon}
                  </div>
                  <div className="block lg:w-fit h-full space-y-1">
                    <p className="text-md">Hotline 24/7</p>
                    <p className="text-xl">{contact.lable}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

interface ContactProps {
  id: string;
  lable: string;
  href: string;
  icon: React.ReactNode;
}
const contact: ContactProps[] = [
  {
    id: "phone",
    lable: "+91 7647867870",
    href: "tel:+917647867870",
    icon: <BsTelephone size={22} />,
  },
  {
    id: "phone",
    lable: "+91 7312405500",
    href: "tel:+917312405500",
    icon: <BsTelephone size={22} />,
  },
  {
    id: "email",
    lable: "audit@patelngupta.com",
    href: "mailto:audit@patelngupta.com",
    icon: <MdOutlineMail size={22} />,
  },
];
