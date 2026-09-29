"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";

import type { IconType } from "react-icons";
import {
  MdOutlinePhone,
  MdEmail,
  MdLocationOn,
  MdDirections,
  MdArrowOutward,
  MdArrowForward,
} from "react-icons/md";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import { footerData } from "@/lib/data";

/* ------------------------------ TYPES ------------------------------ */

type Branch = {
  name: string;
  address: string;
  visit?: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type SocialLink = LinkItem & {
  icon: IconType;
};

/* ------------------------------ DATA ------------------------------ */

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const rawBranches: Branch[] = [
  {
    name: "Indore",
    address:
      "543-544, 4th Floor, Vikram Tower, Sapna Sangeeta Rd, Old Agarwal Nagar, Indore, Madhya Pradesh 452001",
    visit: "https://maps.app.goo.gl/P7B6JZTZersgS46g9",
  },
  {
    name: "Bangalore",
    address:
      "OFFICE NO. 3, 1ST FLOOR, 72/13 Gange Complex, Near FNP Florist & Bakery Siddapura, Junction, Nallurahalli Main Rd, Whitefield, Bengaluru, Karnataka 560066",
  },
  {
    name: "Khategaon",
    address: "1ST FLOOR, TADA COMPLEX, IMLI BAZAR, Khategaon, Madhya Pradesh 455336",
  },
  {
    name: "Harda",
    address: "GROUND FLOOR, OFFICE NO 1, PNB COMPLEX, HARDA, MADHYA PRADESH, 461331",
  },
];

// Use the custom link when given, otherwise build one from the address
const branches = rawBranches.map((b) => ({ ...b, visit: b.visit || mapsUrl(b.address) }));

const contact = { email: "patelandguptaweb@gmail.com" };

const phoneNumbers: LinkItem[] = [
  { label: "0731-2405500", href: "tel:+917312405500" },
  { label: "0731-2405511", href: "tel:+917312405511" },
];

const whatsappNumbers: LinkItem[] = [
  { label: "7647867870", href: "https://wa.me/917647867870" },
  { label: "8959155000", href: "https://wa.me/918959155000" },
];

const career = {
  contactName: "HR / Career Contact",
  phone: "+91-8959155000",
  email: "mithil@patelngupta.com",
  message: "To know about current openings!",
  linkLabel: "Contact Us",
  link: "/contact",
};

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/PatelNGupta", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/patelngupta/", icon: FaInstagram },
  { label: "X", href: "https://x.com/patelngupta", icon: FaXTwitter },
];

/* ---------------------------- SMALL PIECES ---------------------------- */

const linkCls =
  "text-[16px] leading-6 text-zinc-700 transition-colors hover:text-[#7977C6]";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-900">
      <span className="h-[3px] w-6 rounded-full bg-[#7977C6]" />
      {children}
    </h3>
  );
}

function Row({
  icon: Icon,
  iconClass = "text-[#7977C6]",
  children,
}: {
  icon: IconType;
  iconClass?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200">
        <Icon className={`h-[18px] w-[18px] ${iconClass}`} />
      </span>
      <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-0.5">{children}</div>
    </div>
  );
}

// Links separated by a thin "|" pipe
function PipeList({ items, external = false }: { items: LinkItem[]; external?: boolean }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-zinc-300" />}
          <a
            href={item.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={linkCls}
          >
            {item.label}
          </a>
        </span>
      ))}
    </>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

export default function Footer() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  if (pathname.includes("/studio")) return null;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay },
  });

  return (
    <footer ref={ref} className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* TOP: brand / contact / career */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <motion.div {...reveal(0)} className="md:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Patel N Gupta home" className="inline-flex w-fit">
              <Image
                src="/logo.png"
                alt="Patel N Gupta"
                width={1920}
                height={1080}
                className="h-auto w-48 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-[420px] text-[16px] leading-7 text-zinc-600">
              {footerData.companyDescription}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#7977C6] hover:bg-[#7977C6] hover:text-white"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div {...reveal(0.08)} className="lg:col-span-4">
            <Heading>Contact</Heading>
            <div className="flex flex-col gap-4">
              <Row icon={MdEmail}>
                <a href={`mailto:${contact.email}`} className={`${linkCls} break-all`}>
                  {contact.email}
                </a>
              </Row>
              <Row icon={MdOutlinePhone}>
                <PipeList items={phoneNumbers} />
              </Row>
              <Row icon={FaWhatsapp} iconClass="text-[#25D366]">
                <PipeList items={whatsappNumbers} external />
              </Row>
            </div>
          </motion.div>

          {/* Career */}
          <motion.div {...reveal(0.16)} className="lg:col-span-4">
            <Heading>Career</Heading>
            <div className="flex flex-col gap-1.5">
              <p className="text-[18px] font-semibold text-zinc-900">{career.contactName}</p>
              <a href={`tel:${career.phone.replace(/[\s-]/g, "")}`} className={linkCls}>
                {career.phone}
              </a>
              <a href={`mailto:${career.email}`} className={`${linkCls} break-all`}>
                {career.email}
              </a>
              <p className="mt-2 text-[15px] leading-6 text-zinc-500">
                {career.message}{" "}
                <Link
                  href={career.link}
                  className="font-semibold text-[#7977C6] hover:text-zinc-950"
                >
                  {career.linkLabel}
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* BRANCHES: square cards in a grid */}
        <motion.div {...reveal(0.2)} className="border-t border-zinc-200 py-10">
          <Heading>Our Branches</Heading>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((b, i) => (
              <div
                key={b.name}
                className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7977C6]/40 hover:shadow-xl hover:shadow-[#7977C6]/10"
              >
                {/* soft watermark */}
                <MdLocationOn
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-[#7977C6]/[0.06] transition-transform duration-500 group-hover:scale-110"
                />

                {/* top: icon badge + index */}
                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7E8F4] text-[#7977C6] transition-colors duration-300 group-hover:bg-[#7977C6] group-hover:text-white">
                    <MdLocationOn className="h-[24px] w-[24px]" />
                  </span>
                  <span className="text-[14px] font-semibold tabular-nums text-zinc-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* name + address */}
                <div className="relative mt-5 flex-1">
                  <h4 className="text-[20px] font-semibold tracking-tight text-zinc-900">
                    {b.name}
                  </h4>
                  <address className={`mt-2 ${b.name.toLowerCase() === "bangalore" ? "text-xs" : "text-sm"} not-italic leading-[1.65] text-zinc-600`}>
                    {b.address}
                  </address>
                </div>

                {/* map link */}
                <a
                  href={b.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${b.name} branch on Google Maps`}
                  className="relative mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-full border border-[#7977C6]/30 pl-4 pr-1.5 text-[13px] font-semibold uppercase tracking-wide text-[#5f5db0] transition-all duration-300 hover:border-[#7977C6] hover:bg-[#7977C6] hover:text-white"
                >
                  <MdDirections className="h-[18px] w-[18px]" />
                  View on map
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7E8F4] text-[#7977C6]">
                    <MdArrowOutward className="h-[16px] w-[16px]" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-200 bg-[#E7E8F4]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-[15px] text-zinc-600">
            © {new Date().getFullYear()} {footerData.copyright}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-[16px] font-medium text-zinc-800">Have a requirement?</span>
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-[#7977C6] px-6 text-[14px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-zinc-900 hover:shadow-lg"
            >
              Contact Us
              <MdArrowForward className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}