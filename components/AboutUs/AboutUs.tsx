"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { PiHandshakeLight } from "react-icons/pi";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const AboutUs = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
        <Story />
        <Business />
        {/* <Success /> */}
        <OurTeam />
      </main>
    </>
  );
};

export default AboutUs;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-10 p-4 lg:px-[120px] lg:py-[100px] overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 w-full h-[30vh] md:h-[50vh] lg:h-[calc(100vh-83px)] bg-[#E7E8F4]"></div>
        <div className="w-full h-fit lg:h-[170px]">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl text-balance uppercase"
          >
            About PATEL & GUPTA
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-2xl md:text-4xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-2 lg:leading-[65px]"
          >
            We{"’"}re making work meaningful for everyone, everywhere.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="h-full lg:h-[648px] w-full rounded-3xl overflow-hidden"
        >
          <Image
            src={"/assets/images/aboutUsPageBanner.jpg"}
            alt="banner"
            width={3840}
            height={2160}
            loading="eager"
            className="w-full h-full object-fill rounded-3xl overflow-hidden"
          />
        </motion.div>
      </section>
    </>
  );
};

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden"
      >
        <motion.h2
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit text-xl md:text-3xl lg:text-5xl font-black"
        >
          Our Story
        </motion.h2>
        <div className="w-full h-fit flex flex-col md:flex-row gap-5">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-xl font-thin text-balance text-justify"
          >
            The firm {'"PATEL & GUPTA, Chartered Accountants"'} was incorporated
            in the year 2000 as a partnership firm with four partners, with a
            vision to provide quality professional services with greater
            accuracy and transparency through multi-locations branches spread
            across states.
          </motion.p>
          <motion.p
            variants={fadeInOut("left", "tween", 0.2, 1)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-xl font-thin text-balance text-justify"
          >
            The firm is also engaged in providing financial assistance from
            banks and FIs by the way of Term Loan, Short-term and long-term
            Working Capital Loan, Mortgage Loan, Unsecured Loans, Heavy
            Equipment/Machinery Loans, Export Credit, LC, and Bank Guarantee
            facilities, catering to the needs and requirements best suited to
            clients.
          </motion.p>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row gap-5">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1.3)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-xl font-thin text-balance text-justify"
          >
            Our firm has also been engaged previously for field audit and
            documentation on behalf of Standard Chartered Bank for their Supply
            Chain Finance product under Dealer Financing Flexiloan in M.P.,
            Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
          </motion.p>
          <motion.p
            variants={fadeInOut("left", "tween", 0.2, 1.3)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit flex-1 text-sm md:text-md lg:text-xl font-thin text-balance text-justify"
          >
            Firm is also engaged in providing financial assistance from banks
            and FIs by the way of Term Loan, Short-term and long-term Working
            Capital Loan, Mortgage Loan, Unsecured Loans, Heavy
            Equipment/Machinery Loans, Export Credit, LC, and Bank Guarantee
            facilities, looking to the need and requirement best suited to the
            clients.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 1.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full h-fit flex flex-col md:flex-row gap-5"
        >
          <p className="w-full h-fit flex-1 text-center text-sm md:text-md lg:text-xl font-thin overflow-hidden">
            Our firm has also been engaged previously for field audit and
            documentation on behalf of Standard Chartered Bank for their Supply
            Chain Finance product under Dealer Financing Flexiloan in M.P.,
            Gujarat, Rajasthan, and in exceptional cases in Haryana and Punjab.
          </p>
        </motion.div>
      </section>
    </>
  );
};

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <section
      ref={ref}
      className="w-full h-fit flex justify-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 bg-[#E7E8F4] space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden"
    >
      <motion.div
        variants={fadeInOut("right", "tween", 0.2, 0.5)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-full h-full md:mt-8 sticky top-20 flex-1 rounded-xl overflow-hidden"
      >
        {/* sticky top-32 */}
        <Image
          src={"/assets/images/aboutUsPage.jpg"}
          alt="banner"
          width={1920}
          height={1080}
          loading="eager"
          className="w-full h-full lg:h-[65vh] object-cover"
        />
      </motion.div>
      <div className="w-full h-full flex-1 space-y-4 md:space-y-8 lg:space-y-10">
        <motion.p
          variants={fadeInOut("left", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-fit flex-center rounded-full bg-white/70 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden"
        >
          <PiHandshakeLight size={20} className="mr-1" />
          We doing exceptional business since 2000.
        </motion.p>
        <div className="space-y-4 md:space-y-6">
          <motion.p
            variants={fadeInOut("left", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide"
          >
            About Our Company
          </motion.p>
          <div className="space-y-2 md:space-y-4">
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 1)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-fit text-sm md:text-md lg:text-xl text-balance text-justify"
            >
              “PATEL & GUPTA, A Chartered Accountants firm was incorporated in
              the year 2000 with four partners. We are a combination of
              qualified and experienced professionals to cater the need of
              high-tech professional services
            </motion.p>
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 1.2)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-fit text-sm md:text-md lg:text-xl text-balance text-justify"
            >
              Our vision is to provide quality professional services with
              greater accuracy and transparency through multiple branches spread
              across various states
            </motion.p>
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 1.5)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-fit text-sm md:text-md lg:text-xl text-balance text-justify"
            >
              Our moto is to assist client to become most competitive in the
              market. Our mission is to excel through use of technology and
              utilization of best expertise of human resources.
            </motion.p>
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 1.8)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-fit text-sm md:text-md lg:text-xl text-balance text-justify"
            >
              Firm is also engaged in providing financial assistance from the
              bank’s and FI’s by the way of Term Loan, Short term and long term
              working capital Loan, Mortgage loan, unsecured Loans, Heavy
              Equipment/Machinery Loans, Export Credit, LC, Bank guarantee
              facility etc looking to the need & requirement best suited to the
              clients.
            </motion.p>
            <motion.p
              variants={fadeInOut("left", "tween", 0.2, 2.1)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="w-full h-fit text-sm md:text-md lg:text-xl text-balance text-justify"
            >
              Our firm has also been engaged previously for field audit and
              documentation on behalf of Standard Chartered Bank for their
              Supply Chain Finance product under Dealer Financing Flexi loan in
              M.P., Gujrat, Rajasthan, and in exceptional cases Haryana and
              Punjab.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

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
  social: SocialLink[];
}

interface CardProps {
  card: CardData;
}

const OurTeam: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full h-fit flex items-center flex-col space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-14 overflow-hidden"
    >
      <motion.p
        variants={fadeInOut("down", "tween", 0.2, 0.5)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-fit h-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg px-5 py-3 text-center"
      >
        <PiHandshakeLight size={20} className="mr-1" />
        We{"'"}re Doing Exceptional Business Since 2000.
      </motion.p>
      <motion.div
        variants={fadeInOut("down", "tween", 0.2, 0.8)}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        className="w-full md:w-[35%] text-center text-4xl font-extrabold"
      >
        Our Team
      </motion.div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
        {ourTeam.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeInOut("up", "tween", 0.2, 0.5 * card.id)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
          >
            <Card card={card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full aspect-[9/16] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={`absolute w-full h-full transform-style-preserve-3d transition-transform duration-500 rounded-xl shadow-xl ${
          isFlipped ? "rotateY-180" : ""
        }`}
      >
        <motion.div className="absolute w-full h-full backface-hidden">
          <div className="h-[85%] w-full rounded-t-xl overflow-hidden">
            <Image
              src={card.img}
              alt={`Team profile of ${card.name}`}
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[15%] w-full flex-center flex-col p-2 bg-white rounded-b-xl">
            <h3 className="text-sm md:text-md text-center font-bold">
              {card.name}
            </h3>
          </div>
        </motion.div>
        <motion.div className="absolute w-full h-full bg-[#E7E8F4] text-sm lg:text-md text-center flex-center flex-col p-4 rounded-xl backface-hidden rotateY-180">
          <p className="mb-4">{card.description}</p>
          <div className="flex flex-wrap gap-6 md:gap-4 lg:gap-2">
            <AnimatedTooltip items={card.social} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ourTeam: CardData[] = [
  {
    id: 1,
    name: "C.A. SATISH PATEL",
    description:
      "Use this paragraph to describe what you do. This is a great place to let your visitors know who you are.",
    img: "/assets/team/ca_satish_patel.jpg",
    social: [
      {
        id: 1,
        label: "LinkedIn",
        href: "/about-us#",
        icon: <SlSocialLinkedin size={25} />,
      },
    ],
  },
  {
    id: 2,
    name: "C.A. SHRINATH GUPTA",
    description:
      "Use this paragraph to describe what you do. This is a great place to let your visitors know who you are.",
    img: "/assets/team/ca_shrinarth_gupta.jpg",
    social: [
      {
        id: 1,
        label: "LinkedIn",
        href: "/about-us#",
        icon: <SlSocialLinkedin size={25} />,
      },
    ],
  },
  {
    id: 3,
    name: "C.A. GUNJAN JAIN",
    description:
      "Use this paragraph to describe what you do. This is a great place to let your visitors know who you are.",
    img: "/assets/team/ca_gunjan_jain.jpg",
    social: [
      {
        id: 1,
        label: "LinkedIn",
        href: "/about-us#",
        icon: <SlSocialLinkedin size={25} />,
      },
      {
        id: 2,
        label: "Facebook",
        href: "/about-us#",
        icon: <SlSocialFacebook size={25} />,
      },
      {
        id: 3,
        label: "Instagram",
        href: "/about-us#",
        icon: <SlSocialInstagram size={25} />,
      },
    ],
  },
  {
    id: 4,
    name: "C.A. AYUSH GARG",
    description:
      "Use this paragraph to describe what you do. This is a great place to let your visitors know who you are.",
    img: "/assets/team/ca_ayush_garg.jpg",
    social: [
      {
        id: 1,
        label: "LinkedIn",
        href: "/about-us#",
        icon: <SlSocialLinkedin size={25} />,
      },
    ],
  },
  {
    id: 5,
    name: "C.A. GOVINDA SOMANI",
    description:
      "Use this paragraph to describe what you do. This is a great place to let your visitors know who you are.",
    img: "/assets/team/ca_govinda_swami.jpg",
    social: [
      {
        id: 1,
        label: "LinkedIn",
        href: "/about-us#",
        icon: <SlSocialLinkedin size={25} />,
      },
    ],
  },
];

const Success = () => {
  return (
    <>
      <div className="w-full h-screen flex-between flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 space-y-4 md:space-y-6 p-4 lg:px-[120px] lg:py-10 overflow-hidden">
        <div className="w-full h-full flex-center flex-1">
          <div className="space-y-4">
            <p className="w-fit flex-center rounded-full bg-[#E7E8F4] text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-2 overflow-hidden">
              <PiHandshakeLight size={20} className="mr-1" /> Our Success in
              Numbers
            </p>
            <p className="w-full h-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-10 tracking-wide">
              We Handle The Most Tedious Bookkeeping Tasks of Your Business
              Operations.
            </p>
            <p className="w-full h-fit text-sm md:text-md lg:text-lg text-balance text-justify">
              Experienced, knowledgeable professionals in Property Tax
              Consulting. Our team of Property Tax Consultants is committed to
              saving you money by obtaining the lowest possible assessed value
              for your commercial or residential properties.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex-1 rounded-xl overflow-hidden">
          <Image
            src={
              "https://consultia-nextjs.vercel.app/assets/img/about/about22.png"
            }
            alt="banner"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
