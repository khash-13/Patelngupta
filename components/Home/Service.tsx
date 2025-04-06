"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { MdArrowForward } from "react-icons/md";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { PiHandshakeLight } from "react-icons/pi";
import { services } from "@/lib/data";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit bg-[#243D31] z-0 overflow-hidden"
      >
        <div className="w-full h-full flex flex-col gap-4 md:gap-5 items-center p-2 my-4 py-[90px] overflow-hidden">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="flex-center rounded-full bg-zinc-300 text-sm md:text-lg font-light shadow-lg px-5 py-3 text-center"
          >
            <PiHandshakeLight size={20} className="mr-1" />
            We Are Here For Your Tax Relief.
          </motion.p>
          <motion.div
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full lg:w-[35%] text-center text-4xl font-extrabold text-white"
          >
            Our Service is designed specifically for your businesses.
          </motion.div>
          <div className="container grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 mt-8 md:px-[100px] lg:px-[120px]">
            {services.map((service, index) => (
              <motion.div
                variants={fadeInOut("up", "tween", 0.2, 0.2 * index)}
                initial="hidden"
                animate={isInView ? "show" : "exit"}
                key={index}
                className="w-full h-fit group flex flex-col p-6 space-y-4 bg-white/20 backdrop-blur-md text-white rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4 translate-y-1 hover:-translate-y-1 ease-in-out duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 p-3 bg-green-100 rounded-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-zinc-200 text-justify line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link}
                    className="group w-fit inline-flex items-center mt-4 text-green-600 group-hover:underline underline-offset-8 group-hover:translate-x-1 ease-in-out duration-300"
                  >
                    Learn More{" "}
                    <MdArrowForward className="ml-2 group-active:translate-x-2 ease-in-out duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeInOut("up", "tween", 0.2, 2)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
          >
            <Link href="/service" className="mt-8">
              <Button className="bg-[#fdc24cec] hover:bg-[#FDC24C] space-x-1 px-6 py-4 md:p-7">
                <span className="text-md md:text-lg font-bold text-black">
                  Explore More Services
                </span>
                <FaArrowUp size={20} className="rotate-45 fill-black" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Service;
