"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  MdOutlinePhone,
  MdArrowOutward,
} from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { footerData } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  if (pathname.includes("/studio")) return null;

  const phoneNumbers = [
    {
      label: "0731-2405500",
      href: "tel:+917312405500",
    },
    {
      label: "0731-2405511",
      href: "tel:+917312405511",
    },
  ];

  const whatsappNumbers = [
    {
      label: "7647867870",
      href: "https://wa.me/917647867870",
    },
    {
      label: "8959155000",
      href: "https://wa.me/918959155000",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/PatelNGupta",
      icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/patelngupta/",
      icon: FaInstagram,
    },
    {
      label: "X",
      href: "https://x.com/patelngupta",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer
      ref={ref}
      className="border-t border-border bg-muted/50"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-16">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <Link
              href="/"
              className="inline-flex w-fit"
              aria-label="Patel N Gupta home"
            >
              <Image
                src="/logo.png"
                alt="Patel N Gupta"
                width={1920}
                height={1080}
                priority
                className="h-auto w-40 object-cover sm:w-48"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
              {footerData.companyDescription}
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full border border-border
                      text-muted-foreground
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-foreground
                      hover:bg-foreground
                      hover:text-background
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {footerData.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
              }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                {column.title}
              </h3>

              <nav className="flex flex-col gap-3">
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    prefetch={false}
                    className="
                      group flex w-fit items-center gap-1
                      text-sm text-muted-foreground
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-foreground
                    "
                  >
                    <span>{link.label}</span>

                    <MdArrowOutward
                      className="
                        h-3.5 w-3.5
                        opacity-0
                        -translate-x-1
                        transition-all duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </nav>
            </motion.div>
          ))}

<motion.div
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={
    isInView
      ? {
          opacity: 1,
          y: 0,
        }
      : {}
  }
  transition={{
    duration: 0.7,
    delay: 0.3,
  }}
>
  <h3
    className="
      mb-7
      text-xs font-semibold
      uppercase tracking-[0.2em]
      text-zinc-400
    "
  >
    Get in touch
  </h3>

  <div className="grid grid-cols-2 gap-8">
    {/* Call */}
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <MdOutlinePhone className="h-4 w-4 text-zinc-900" />

        <span className="text-sm font-medium text-zinc-900">
          Call
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {phoneNumbers.map((phone) => (
          <a
            key={phone.label}
            href={phone.href}
            className="
              w-fit
              text-[14px]
              text-zinc-500
              transition-colors duration-300
              hover:text-zinc-950
            "
          >
            {phone.label}
          </a>
        ))}
      </div>
    </div>

    {/* WhatsApp */}
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <FaWhatsapp className="h-4 w-4 text-[#25D366]" />

        <span className="text-sm font-medium text-zinc-900">
          WhatsApp
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {whatsappNumbers.map((number) => (
          <a
            key={number.label}
            href={number.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-fit
              text-[14px]
              text-zinc-500
              transition-colors duration-300
              hover:text-zinc-950
            "
          >
            {number.label}
          </a>
        ))}
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col-reverse gap-4
            px-5 py-5
            sm:px-8
            md:flex-row md:items-center md:justify-between
            lg:px-10
          "
        >
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} {footerData.copyright}
          </p>
{/* 
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="
                text-xs text-muted-foreground
                transition-colors duration-300
                hover:text-foreground
                sm:text-sm
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-xs text-muted-foreground
                transition-colors duration-300
                hover:text-foreground
                sm:text-sm
              "
            >
              Terms & Conditions
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
