"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInOut, zoom } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MdArrowDownward } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const [size, setSize] = useState<string>("mobile");
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
    if (windowWidth < 640) {
      setSize("mobile");
    } else if (windowWidth < 1024) {
      setSize("tablet");
    } else {
      setSize("desktop");
    }
  }, [windowWidth]);

  const handleClick = () => {
    let scrollToPosition = 0;

    if (size === "mobile") {
      scrollToPosition = window.innerHeight - 220;
    } else if (size === "tablet") {
      scrollToPosition = window.innerHeight;
    } else if (size === "desktop") {
      scrollToPosition = window.innerHeight + 200;
    }

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-fit md:min-lg:h-fit lg:h-[120vh]">
      <div className="h-fit lg:h-[calc(120vh-70px)] flex-center gap-2 p-4 lg:px-[120px] lg:py-8 mb-14 lg:mb-0 overflow-hidden">
        <div className="w-full lg:w-[50%] h-fit space-y-5 lg:space-y-8 p-2 z-30">
          <motion.span
            variants={fadeInOut("right", "tween", 0.2, 0.8)} //spring
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-fit flex-center rounded-full bg-gray-300/50 text-sm md:text-md lg:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden"
          >
            💸 Patel & Gupta CA{"'"}s
          </motion.span>
          <div className="w-fit space-y-4">
            <motion.h2
              variants={fadeInOut("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              animate="show"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-950 text-balance"
            >
              We are a combination of
            </motion.h2>
            <motion.p
              variants={fadeInOut("right", "tween", 0.2, 1.5)}
              initial="hidden"
              whileInView="show"
              animate="show"
              className="max-w-[600px] text-gray-700 text-lg md:text-md lg:text-lg xl:text-xl font-light text-justify"
            >
              Qualified and Experienced Professionals to cater to the needs of
              high-tech professional services.
            </motion.p>
            <motion.p
              variants={fadeInOut("right", "tween", 0.2, 1.8)}
              initial="hidden"
              whileInView="show"
              animate="show"
              className="max-w-[600px] text-gray-700 text-lg md:text-md lg:text-lg xl:text-xl font-light text-justify"
            >
              Our motto is to assist clients to become the most competitive in
              the market. Our mission is to excel through the use of technology
              and utilization of best expertise of human resources.
            </motion.p>
          </div>
          <motion.div
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate="show"
            exit="exit"
            viewport={{ amount: 0.6, once: false }}
            className="w-full flex lg:flex-wrap items-center justify-center md:justify-start flex-col gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button className="bg-green-950 hover:bg-green-800 text-lg font-bold px-6 py-4 md:p-7">
                Get An Estimated Quote
                <FaArrowUp size={20} className="ml-1 rotate-45" />
              </Button>
            </Link>
            <Link href="https://calendly.com/birlap10/30min" target="_blank">
              <Button className="bg-[#fdc24cd8] hover:bg-[#FDC24C] space-x-1 px-6 py-4 md:p-7">
                <span className="text-lg font-bold text-black">
                  Schedule A Call
                </span>
                <FaArrowUp size={20} className="rotate-45 fill-black" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={zoom("out", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          animate="show"
          className="hidden lg:flex z-30 relative w-[60%] h-full rounded-xl overflow-hidden"
        >
          <Image
            src={hero.imageUrl}
            width={1920}
            height={1080}
            alt={hero.imageAlt}
            loading="eager"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute top-0 right-2 w-fit h-fit">
            <Image
              src="https://consultia-nextjs.vercel.app/assets/img/shapes/tax-shape1.png"
              width={200}
              height={200}
              alt={hero.imageAlt}
              loading="lazy"
              className="w-28 h-24"
            />
          </div> */}
        </motion.div>
      </div>
      <div
        ref={ref}
        className="absolute -bottom-24 lg:-bottom-12 z-20 w-full h-[70px] flex-center"
      >
        <motion.div
          variants={fadeInOut("down", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-fit h-fit border-t-2 border-dashed border-slate-400 rounded-full p-1"
        >
          <button
            onClick={handleClick}
            className="w-28 h-28 flex-center bg-white border rounded-full p-1"
          >
            <MdArrowDownward size={50} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const hero = {
  imageUrl: "/assets/images/hero.jpg",
  imageAlt: "Professionals in a discussion",
};
