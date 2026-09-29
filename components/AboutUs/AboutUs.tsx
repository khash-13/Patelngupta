"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { PiHandshakeLight } from "react-icons/pi";
import {
  MdOutlineVisibility,
  MdOutlineFlag,
  MdOutlineTrendingUp,
} from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

/* -------------------------------------------------------------------------- */
/*  Shared helpers                                                            */
/* -------------------------------------------------------------------------- */

const reveal = (inView: boolean) => ({
  initial: "hidden",
  animate: inView ? "show" : "exit",
});

const AboutUs = () => {
  return (
    // overflow-x-clip (not hidden) so the sticky image in <Business /> still works
    <main className="w-full overflow-x-clip">
      <Hero />
      <Story />
      <Business />
      <OurTeam />
    </main>
  );
};

export default AboutUs;

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full bg-[#E7E8F4] px-4 pt-10 pb-8 md:pt-14 lg:px-[120px] lg:pt-20 lg:pb-14"
    >
      <div className="mx-auto max-w-screen-xl space-y-8 lg:space-y-12">
        <div className="mx-auto max-w-4xl space-y-3 text-center">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            {...reveal(isInView)}
            className="text-base font-medium text-[#7977C6] md:text-xl"
          >
            About PATEL & GUPTA
          </motion.p>
          <motion.h1
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            {...reveal(isInView)}
            className="text-balance text-3xl font-extrabold leading-tight text-[#161540] md:text-5xl lg:text-6xl"
          >
            We{"’"}re making work meaningful for everyone, everywhere.
          </motion.h1>
        </div>

        {/* Ratio-based frame: image never stretches, crops evenly at every width */}
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1)}
          {...reveal(isInView)}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <Image
            src="/assets/images/aboutUsPageBanner.jpg"
            alt="PATEL & GUPTA Chartered Accountants"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Story                                                                     */
/* -------------------------------------------------------------------------- */

const financeFacilities = [
  "Term Loan",
  "Short & Long-term Working Capital Loan",
  "Mortgage Loan",
  "Unsecured Loans",
  "Heavy Equipment / Machinery Loans",
  "Export Credit",
  "LC",
  "Bank Guarantee",
];

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15 });

  return (
    <section ref={ref} className="w-full px-4 py-12 lg:px-[120px] lg:py-20">
      <div className="mx-auto grid max-w-screen-xl gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="w-full h-full relative">
        <motion.h2
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          {...reveal(isInView)}
          className="text-3xl font-black text-[#161540] md:text-4xl lg:text-5xl"
        >
          Our Story
        </motion.h2>

        <div className="w-full h-5/6 lg:absolute my-2 bottom-0">
                <motion.div
          variants={fadeInOut("right", "tween", 0.2, 0.8)}
          {...reveal(isInView)}
          className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24 lg:aspect-[4/4] lg:self-start"
        >
          <Image
            src="/assets/images/foundingM.jpg"
            alt="The PATEL & GUPTA team at work"
            fill
            className="object-cover"
          />
        </motion.div>
        </div>
        </div>

        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 0.8)}
          {...reveal(isInView)}
          className="space-y-10"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-[#161540] md:text-2xl md:leading-relaxed">
            PATEL & GUPTA, Chartered Accountants, was incorporated in 2000 as a
            partnership firm with four partners: qualified and experienced
            professionals who came together to meet the need for high-tech
            professional services.
          </p>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="space-y-4 border-t-2 border-[#161540] pt-5">
              <h3 className="text-lg font-bold text-[#161540] md:text-xl">
                Financial assistance
              </h3>
              <p className="text-base leading-relaxed text-zinc-700">
                We help clients raise funds from banks and financial
                institutions, matched to their needs and requirements.
                Facilities include:
              </p>
              <ul className="grid gap-x-6 gap-y-1.5 text-sm text-zinc-700 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {financeFacilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7977C6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t-2 border-[#161540] pt-5">
              <h3 className="text-lg font-bold text-[#161540] md:text-xl">
                Field audit & documentation
              </h3>
              <p className="text-base leading-relaxed text-zinc-700">
                We have previously carried out field audit and documentation
                for Standard Chartered Bank{"’"}s Supply Chain Finance product
                under Dealer Financing Flexiloan in M.P., Gujarat and
                Rajasthan, and in exceptional cases in Haryana and Punjab.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Business                                                                  */
/* -------------------------------------------------------------------------- */

type Pillar = { icon: IconType; title: string; text: string };

const pillars: Pillar[] = [
  {
    icon: MdOutlineVisibility,
    title: "Our vision",
    text: "To provide quality professional services with greater accuracy and transparency, through branches spread across various states.",
  },
  {
    icon: MdOutlineFlag,
    title: "Our mission",
    text: "To excel through the use of technology and the best expertise of our people.",
  },
  {
    icon: MdOutlineTrendingUp,
    title: "Our motto",
    text: "To help clients become the most competitive in their market.",
  },
];

const highlights = [
  { value: "2000", label: "Year established" },
  { value: "2", label: "Founding partners" },
  { value: "Multi-state", label: "Branch network" },
];

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full bg-[#E7E8F4] px-4 py-12 lg:px-[120px] lg:py-20"
    >
      <div className="mx-auto grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:gap-16">
        {/* lg:self-start is required for sticky to work inside a grid */}
        <motion.div
          variants={fadeInOut("right", "tween", 0.2, 0.8)}
          {...reveal(isInView)}
          className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24 lg:aspect-[5/4] lg:self-start"
        >
          <Image
            src="/assets/images/aboutBanner.jpg"
            alt="The PATEL & GUPTA team at work"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            variants={fadeInOut("left", "tween", 0.2, 0.5)}
            {...reveal(isInView)}
            className="space-y-5"
          >
            <p className="inline-flex w-fit items-center rounded-full bg-white/80 px-5 py-2 text-sm font-light shadow-lg md:text-base">
              <PiHandshakeLight size={20} className="mr-1.5 shrink-0" />
              Doing exceptional business since 2000
            </p>
            <h2 className="text-3xl font-black text-[#161540] md:text-4xl lg:text-5xl">
              About Our Company
            </h2>
          </motion.div>

          <motion.dl
            variants={fadeInOut("left", "tween", 0.3, 0.8)}
            {...reveal(isInView)}
            className="divide-y divide-[#161540]/15 border-y border-[#161540]/15"
          >
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 py-5">
                <Icon
                  size={28}
                  className="mt-0.5 shrink-0 text-[#7977C6]"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <dt className="text-lg font-bold text-[#161540]">{title}</dt>
                  <dd className="text-base leading-relaxed text-zinc-700">
                    {text}
                  </dd>
                </div>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={fadeInOut("up", "tween", 0.4, 0.8)}
            {...reveal(isInView)}
            className="grid grid-cols-3 divide-x divide-[#161540]/15"
          >
            {highlights.map(({ value, label }) => (
              <div key={label} className="space-y-1 px-2 text-center first:pl-0 last:pr-0">
                <p className="break-words text-xl font-black text-[#161540] sm:text-2xl lg:text-3xl">
                  {value}
                </p>
                <p className="text-xs text-zinc-600 sm:text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Team                                                                      */
/* -------------------------------------------------------------------------- */

interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface CardData {
  id: number;
  name: string;
  description: string;
  img: string;
  social?: SocialLink[];
}

interface CardProps {
  card: CardData;
}

const OurTeam: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section ref={ref} className="w-full px-4 py-12 lg:px-[120px] lg:py-20">
      <div className="mx-auto max-w-screen-xl space-y-10">
        <motion.div
          variants={fadeInOut("down", "tween", 0.2, 0.6)}
          {...reveal(isInView)}
          className="mx-auto max-w-2xl space-y-3 text-center"
        >
          <h2 className="text-3xl font-black text-[#161540] md:text-4xl lg:text-5xl">
            Our Team
          </h2>
          <p className="text-base text-zinc-700 md:text-lg">
            The chartered accountants behind PATEL & GUPTA.
          </p>
        </motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
  {ourTeam.map((card, index) => (
    <motion.div
      key={card.id}
      variants={fadeInOut("up", "tween", 0.1 * index, 0.6)}
      {...reveal(isInView)}
      className="min-w-0 w-full"
    >
      <Card card={card} />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <article
      className="
        group relative h-[400px] w-full
        overflow-hidden rounded-2xl
        bg-zinc-900 shadow-lg
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
        focus-within:ring-2
        focus-within:ring-[#7977C6]
      "
      tabIndex={0}
    >
      {/* Image */}
      <Image
        src={card.img}
        alt={`Portrait of ${card.name}`}
        fill
        sizes="
          (min-width: 1280px) 20vw,
          (min-width: 1024px) 20vw,
          (min-width: 768px) 33vw,
          50vw
        "
        className="
          object-cover object-top
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Permanent gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />

      {/* Hover dark overlay */}
      <div
        className="
          absolute inset-0
          bg-[#161540]/75
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          group-focus-within:opacity-100
        "
      />

      {/* Description */}
      <div
        className="
          absolute inset-x-5 top-10
          z-10
          translate-y-5 opacity-0
          transition-all duration-500 ease-out
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >
        <div className="mb-4 h-px w-10 bg-white/40" />

        <p className="text-xs absolute leading-relaxed text-white/85 sm:text-sm">
          {card.description}
        </p>

        {/* Social */}
        {card.social && (
          <div className="mt-4 flex items-center">
            <AnimatedTooltip items={card.social} />
          </div>
        )}
      </div>

      {/* Bottom name */}
      <div
        className="
          absolute inset-x-5 bottom-5
          z-20
          transition-transform duration-500
          group-hover:-translate-y-1
        "
      >
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
          Team Member
        </p>

        <h3 className="text-lg font-bold leading-tight text-white sm:text-lg">
          {card.name}
        </h3>
      </div>

      {/* Small indicator */}
      <div
        className="
          absolute bottom-6 right-5
          z-20 h-2 w-2 rounded-full
          bg-white/60
          transition-all duration-300
          group-hover:scale-150
          group-hover:bg-white
        "
      />
    </article>
  );
};




const ourTeam: CardData[] = [
  {
    id: 1,
    name: "C.A. SATISH PATEL",
    description:
      "C.A. Satish Patel advises businesses and individuals on taxation, compliance and long-term financial planning, with a focus on accuracy and transparency.",
    img: "/assets/team/ca_satish_patel.jpg",
    // social: [
    //   {
    //     id: 1,
    //     label: "LinkedIn",
    //     href: "/about-us#",
    //     icon: <SlSocialLinkedin size={25} />,
    //   },
    // ],
  },
  {
    id: 2,
    name: "C.A. SHRINATH GUPTA",
    description:
      "C.A. Shrinath Gupta specialises in audit and assurance, bringing a careful, detail-driven approach so financial statements are reliable and compliant.",
    img: "/assets/team/ca_shrinarth_gupta.jpg",
    // social: [
    //   {
    //     id: 1,
    //     label: "LinkedIn",
    //     href: "/about-us#",
    //     icon: <SlSocialLinkedin size={25} />,
    //   },
    // ],
  },
  {
    id: 3,
    name: "C.A. GUNJAN JAIN",
    description:
      "C.A. Gunjan Jain supports clients with GST and indirect tax matters, from registration and returns to reconciliations, keeping businesses accurate and on time.",
    img: "/assets/team/ca_gunjan_jain_3.jpg",
    // social: [
    //   {
    //     id: 1,
    //     label: "LinkedIn",
    //     href: "/about-us#",
    //     icon: <SlSocialLinkedin size={25} />,
    //   },
    //   {
    //     id: 2,
    //     label: "Facebook",
    //     href: "/about-us#",
    //     icon: <SlSocialFacebook size={25} />,
    //   },
    //   {
    //     id: 3,
    //     label: "Instagram",
    //     href: "/about-us#",
    //     icon: <SlSocialInstagram size={25} />,
    //   },
    // ],
  },
  {
    id: 4,
    name: "C.A. AAYUSH GARG",
    description:
      "C.A. Ayush Garg works on banking and finance assignments, helping clients secure term loans, working capital and other credit facilities suited to their needs.",
    img: "/assets/team/ca_ayush_garg.jpg",
    // social: [
    //   {
    //     id: 1,
    //     label: "LinkedIn",
    //     href: "/about-us#",
    //     icon: <SlSocialLinkedin size={25} />,
    //   },
    // ],
  },
  {
    id: 5,
    name: "C.A. GOVINDA SOMANI",
    description:
      "C.A. Govinda Somani handles field audit and documentation for bank finance assignments, including supply chain finance, with thoroughness and care.",
    img: "/assets/team/ca_govinda_swami.jpg",
    // social: [
    //   {
    //     id: 1,
    //     label: "LinkedIn",
    //     href: "/about-us#",
    //     icon: <SlSocialLinkedin size={25} />,
    //   },
    // ],
  },
];