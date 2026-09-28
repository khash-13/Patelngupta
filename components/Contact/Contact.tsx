"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "./Form";
import Link from "next/link";
import Carousel from "../ui/Carousel";

const Contact = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
      </main>
    </>
  );
};

export default Contact;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex flex-col gap-10 bg-gradient-to-b from-[#E7E8F4] to-white p-4 md:p-8 lg:p-10 xl:px-[170px] lg:py-14 overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-3xl md:text-4xl lg:text-6xl text-balance font-black"
          >
            Contact <span className="text-[#7977C6]">Us</span>
          </motion.p>
        </div>
        <ContactForm />
        <Carousel
          autoplay={true}
          arrows={true}
          dots={true}
          className="mb-12 md:mb-8 lg:mb-4"
        >
          {maps.map((map, index) => (
            <motion.div
              key={index}
              title={map.label}
              variants={fadeInOut("up", "tween", 0.2, 1)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-2xl shadow-lg overflow-hidden"
            >
              <iframe
                src={map.mapSrc}
                loading="eager"
                className="w-full h-full border-none object-cover rounded-2xl"
              ></iframe>
            </motion.div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

interface ContactValues {
  id: number;
  head: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contact: ContactValues[] = [
  {
    id: 0,
    head: "Call Us",
    value: "+91 1234567890",
    href: "/tel:+91+91 1234567890",
    icon: <FiPhoneOutgoing size={30} />,
  },
  {
    id: 1,
    head: "Email Us",
    value: "ca@example.com",
    href: "/mailto:ca@example.com",
    icon: <MdOutlineEmail size={30} />,
  },
  {
    id: 2,
    head: "HEADQUARTERS",
    value: "Vikram Tower, Sapna Sangeeta Road, Indore (M.P)",
    href: "/#",
    icon: <SlLocationPin size={30} />,
  },
];


const maps = [
  {
    id: 1,
    label: "Head Office - Indore",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.875210368742!2d75.86785456070011!3d22.702077083233164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1dfc0a9c5f%3A0x23a5731660493bcf!2sPATEL%20%26%20GUPTA%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1724614880575!5m2!1sen!2sin",
  },
  {
    id: 0,
    label: "Banglore",
    mapSrc: 
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.01440620786192!2d77.7312179!3d12.9570972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae121183eeffc9%3A0x10bb19d12094365f!2s269%2C%20Nallurahalli%20Main%20Rd%2C%20near%20Shell%2C%20Phase%201%2C%20Siddapura%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1790620042822!5m2!1sen!2sin"
  },
  {
    id: 2,
    label: "Khategoan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5524109487865!2d76.91382109999999!3d22.595837799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d170c1d980fdd%3A0xf5c16b257ed43d0d!2sTADA%20COMPLEX!5e0!3m2!1sen!2sin!4v1790620101792!5m2!1sen!2sin"
  },
  {
    id: 3,
    label: "Harda",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.65400571792958!2d77.0896446!3d22.3360988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d70d84167d51d%3A0x2909a85adeb611fb!2sPunjab%20National%20Bank!5e0!3m2!1sen!2sin!4v1790620161916!5m2!1sen!2sin"
  },
];
