"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  MdArrowForward,
  MdOutlineReceiptLong,
  MdOutlineAccountBalance,
  MdOutlineFactCheck,
} from "react-icons/md";
import Carousel from "../ui/Carousel";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { PiHandshakeLight } from "react-icons/pi";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  href: string;
};

const services: Service[] = [
  {
    id: "tax-planning",
    title: "Tax Planning & Filing",
    description:
      "Income tax planning, return filing and notice handling, so you pay only what you owe and stay fully compliant.",
    icon: MdOutlineReceiptLong,
    href: "/services/tax-planning",
  },
  {
    id: "gst",
    title: "GST Registration & Compliance",
    description:
      "From GST registration to monthly returns and reconciliations, we keep your business on the right side of the law.",
    icon: MdOutlineAccountBalance,
    href: "/services/gst",
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    description:
      "Statutory, tax and internal audits carried out with accuracy, giving you reliable financials and peace of mind.",
    icon: MdOutlineFactCheck,
    href: "/services/audit",
  },
];

const ServiceCard = ({
  service,
  index,
  isInView,
  mobile = false,
}: {
  service: Service;
  index: number;
  isInView: boolean;
  mobile?: boolean;
}) => {
  const { title, description, icon: Icon, href } = service;

  return (
    <motion.div
      variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
      initial="hidden"
      animate={isInView ? "show" : "exit"}
      className={mobile ? "h-full p-4" : "h-full snap-center shrink-0"}
    >
      <div className="group flex h-full flex-col items-center text-center text-white rounded-lg border border-white/10 bg-white/5 p-8 shadow-lg transition-colors duration-300 hover:bg-white/10">
        <div className="flex-center h-20 w-20 rounded-full bg-zinc-300 text-[#243D31] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon size={40} aria-hidden="true" />
        </div>

        <h3 className="mt-6 mb-2 text-lg md:text-xl font-bold">{title}</h3>
        <p className="mb-6 text-sm md:text-base text-zinc-200">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#243D31] flex-center px-4 py-8 xl:px-[175px] overflow-hidden"
    >
      <div className="w-full max-w-screen-xl flex flex-col gap-6 items-center py-16">
        <motion.p
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="flex-center rounded-full bg-zinc-300 text-sm md:text-lg font-light shadow-lg px-5 py-3 text-center"
        >
          <PiHandshakeLight size={20} className="mr-1" /> We offer solutions for
          your tax relief.
        </motion.p>

        <motion.h2
          variants={fadeInOut("left", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="text-center text-2xl md:text-4xl font-extrabold text-white"
        >
          Trusted tax, audit and compliance services for individuals and
          businesses.
        </motion.h2>

        {/* Desktop / tablet */}
        <div className="hidden sm:grid grid-cols-1 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-10 overflow-x-scroll md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="w-full sm:hidden mt-10">
          <Carousel
            slidesToShow={1}
            autoplay={true}
            arrows={false}
            autoplaySpeed={3000}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isInView={isInView}
                mobile
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;