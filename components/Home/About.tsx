"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { fadeInOut, zoom } from "@/lib/utils";
import { PiHandshakeLight } from "react-icons/pi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section ref={ref} className="relative w-full h-fit overflow-hidden">
        <div className="h-fit flex-1 flex-center gap-10 px-2 py-4 overflow-hidden">
          <motion.div
            variants={zoom("in", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="hidden md:flex relative w-[35%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/assets/images/about.jpg"
              alt={"img"}
              width={1920}
              height={1080}
              objectFit="cover"
              loading="eager"
              className="w-full h-[100vh] object-cover"
            />
          </motion.div>
          <div className="w-full h-full md:w-[45%] lg:w-[50%] space-y-4 p-2 md:px-8 md:py-6">
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 0.5)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-fit flex-center rounded-full bg-gray-300/50 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden"
            >
              <PiHandshakeLight size={20} className="mr-1" /> We Are Here For
              Your Tax Relief.
            </motion.p>
            <div className="w-full space-y-6">
              <motion.h1
                variants={fadeInOut("left", "tween", 0.2, 0.8)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-950"
              >
                About Our Company
              </motion.h1>
              <motion.p
                variants={fadeInOut("left", "tween", 0.2, 1)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                className="max-w-[600px] xl:max-w-[700px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light text-justify"
              >
                The firm{" "}
                <b className="font-semibold">
                  {'"PATEL & GUPTA, Chartered Accountants"'}
                </b>{" "}
                was incorporated in the year 2000 as a partnership firm with
                four partners, with a vision to provide quality professional
                services with greater accuracy and transparency through
                multi-location branches spread across states.
              </motion.p>
              <motion.p
                variants={fadeInOut("left", "tween", 0.2, 1.3)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                className="max-w-[600px] xl:max-w-[700px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light text-justify"
              >
                Our firm is engaged in providing financial assistance from the
                banks and financial institutions by way of Term Loans, Short
                term and long term working capital Loans, Mortgage Loans,
                unsecured Loans, Heavy Equipment/Machinery Loans, Export Credit,
                LC, Bank guarantee facilities, etc., looking to the need and
                requirements best suited to the clients.
              </motion.p>
              <motion.p
                variants={fadeInOut("left", "tween", 0.2, 1.5)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                className="max-w-[600px] xl:max-w-[700px] text-lg text-gray-700 md:text-xl lg:text-lg xl:text-xl font-light text-justify"
              >
                We have also been engaged previously for field audits and
                documentation on behalf of Standard Chartered Bank for their
                Supply Chain Finance product under Dealer Financing Flexiloan in
                M.P., Gujrat, Rajasthan, and in exceptional cases Haryana and
                Punjab.
              </motion.p>
            </div>
            <motion.div
              variants={fadeInOut("up", "tween", 0.2, 1.8)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-fit pt-10"
            >
              <Link href="/about-us">
                <Button className="bg-green-950 hover:bg-green-800 space-x-1 px-6 py-4 md:p-7">
                  <span className="text-md md:text-lg font-bold">
                    More About Us
                  </span>
                  <FaArrowUp size={20} className="rotate-45" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
