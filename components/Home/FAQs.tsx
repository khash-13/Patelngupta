"use client";

import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { PiHandshakeLight } from "react-icons/pi";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/lib/data";

const FAQs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section
      ref={ref}
      id="faqs"
      className="w-full h-fit bg-[#E7E8F4] flex-center flex-col gap-4 p-4 lg:px-[175px] lg:py-[100px] overflow-hidden"
    >
      <motion.p
        variants={fadeInOut("down", "tween", 0.2, 0.5)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden"
      >
        <PiHandshakeLight size={20} className="mr-1" /> FAQ
      </motion.p>
      <motion.p
        variants={fadeInOut("down", "tween", 0.2, 0.8)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-full h-fit text-center text-4xl font-black"
      >
        Frequently Asked Questions
      </motion.p>
      <div className="w-full h-full flex-1 flex gap-2 mt-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-full h-fit space-y-4"
            >
              <AccordionItem value={item.value} key={index}>
                <AccordionTrigger className="w-full text-lg md:text-xl font-medium text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="w-full text-md md:text-lg text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
      <motion.p
        variants={fadeInOut("up", "tween", 0.2, 0.8)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="h-fit w-full text-lg md:text-xl font-bold mt-6 md:mt-12 overflow-hidden"
      >
        Got more Questions ? Speak to our experts{" "}
        <Link href="/contact" className="hover-underline-lr text-[#504e97]">
          Contact Us
        </Link>
      </motion.p>
    </section>
  );
};

export default FAQs;
