"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Carousel from "../ui/Carousel";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { PiHandshakeLight } from "react-icons/pi";
import { SanityDocument } from "next-sanity";

const WhatWeDo = ({ whatWeDos = [] }: { whatWeDos: SanityDocument[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  // console.log(whatWeDos);

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
          We create meaningful work experiences for everyone, everywhere.
        </motion.h2>

        <div className="hidden sm:grid grid-cols-1 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-10 overflow-x-scroll md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none">
          {whatWeDos
            .slice(0, 3)
            .map(({ _id, title, imageURL, slug, body }, index) => (
              <motion.div
                variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                key={_id}
                className="group text-white snap-center shrink-0"
              >
                <div className="w-full h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={imageURL}
                    alt={title}
                    // width={1280}
                    // height={720}
                    width={1920}
                    height={1080}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="py-4 md:py-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-zinc-200 mb-4 text-sm md:text-base line-clamp-3">
                    {/* {description} */}
                    {body[0].children[0]?.text}
                  </p>
                  <Link
                    href={`/blog/what-we-do/${slug?.current}`}
                    className="inline-flex items-center text-zinc-100 transition-colors duration-300 group-hover:underline underline-offset-4"
                    prefetch={false}
                    aria-label={`Learn more about ${title}`}
                  >
                    Check out Case Study
                    <MdArrowForward className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="w-full sm:hidden mt-10">
          <Carousel
            slidesToShow={1}
            autoplay={true}
            arrows={false}
            autoplaySpeed={3000}
          >
            {whatWeDos
              .slice(0, 3)
              .map(({ _id, title, imageURL, slug, body }, index) => (
                <motion.div
                  variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
                  initial="hidden"
                  animate={isInView ? "show" : "exit"}
                  key={index || _id}
                  className="group text-white p-4"
                >
                  <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={imageURL}
                      alt={title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="py-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-1">
                      {title}
                    </h3>
                    <p className="w-full text-zinc-200 mb-4 text-sm text-justify text-balance line-clamp-3">
                      {body[0].children[0]?.text}
                    </p>
                    <Link
                      href={`/blog/what-we-do/${slug?.current}`}
                      className="inline-flex items-center text-zinc-100 transition-colors duration-300 group-hover:underline underline-offset-4"
                      prefetch={false}
                      aria-label={`Learn more about ${title}`}
                    >
                      Check out Case Study
                      <MdArrowForward className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
