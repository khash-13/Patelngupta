"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { services } from "@/lib/data";
import { MdArrowForward } from "react-icons/md";

const Service = () => {
  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero />
        <Services />
        <ProfessionalServices />
        <EmployeesPersonnel />
      </main>
    </>
  );
};

export default Service;

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="w-full h-fit flex flex-col gap-10 bg-[#E7E8F4] p-4 lg:px-[170px] lg:py-[100px] overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-center text-[#7977C6] text-lg lg:text-2xl uppercase"
          >
            Our Services
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl md:text-2xl lg:text-5xl text-[#161540] text-balance font-extrabold leading-8 md:leading-10 lg:leading-[65px]"
          >
            Since 2000, Patel & Gupta, Chartered Accountants, has been offering
            expert services in Audit & Assurance, Advisory, and Taxation.
          </motion.p>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-4 md:gap-5 items-center p-2 my-4 md:px-[120px] md:py-8 overflow-hidden"
      >
        <div className="container grid grid-cols-1 gap-8 px-6 md:px-8 lg:grid-cols-2 mt-8">
          {services.map((service, index) => (
            <motion.div
              variants={fadeInOut("up", "tween", 0.2, 0.2 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-fit h-fit group flex flex-col p-6 space-y-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4 translate-y-1 hover:-translate-y-2 ease-in-out duration-300"
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
                  <p className="mt-2 text-zinc-500 line-clamp-3">
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
      </section>
    </>
  );
};

const ProfessionalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-4 md:gap-5 items-center p-2 my-4 md:px-[120px] md:py-8 overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit text-[#7977C6] text-xl md:text-2xl lg:text-3xl text-center uppercase"
          >
            AREA OF PROFESSIONAL SERVICES:
          </motion.p>

          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 1.2)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit text-start text-[#504e97] text-lg md:text-xl lg:text-2xl font-semibold mt-8"
          >
            <span className="underline underline-offset-8">
              Firm is practicing in the area of
            </span>{" "}
            :
          </motion.p>
          <div className="w-full space-y-4 md:space-y-6 mt-8">
            {practice &&
              practice.map((p, index) => (
                <motion.p
                  key={index}
                  variants={fadeInOut("up", "tween", 0.2, p.id * 0.5)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  viewport={{ amount: 0.5, once: false }}
                  className="w-full h-fit text-[#504e97] text-md md:text-lg lg:text-xl"
                >
                  {p.para}
                </motion.p>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

const practice = [
  { id: 1, para: "1. Statutory Audit, Internal Audit & Concurrent Audit." },
  {
    id: 2,
    para: "Clients include SBI, PNB, BOI, IDBI, Canara Bank, Allahabad Bank, Limited and Private Limited Companies, Trusts, Cooperative Societies, Educational Institutes.",
  },
  { id: 3, para: "2. Account out sourcing and online accounting." },
  { id: 4, para: "3. Direct and indirect Taxation." },
  { id: 5, para: "4. Internal Valuation of Share." },
  { id: 6, para: "5. Company Law Matters." },
  { id: 7, para: "6. Sourcing of capital through debt and PE deals." },
  { id: 8, para: "7. Investment Consultancy." },
  { id: 9, para: "8. Management Consultancy." },
  { id: 10, para: "9. Financing from FI’s and Banks." },
  {
    id: 11,
    para: "Firm is also engaged in providing financial assistance from the bank’s and FI’s by the way of Term Loan, Short term and long term working capital Loan, Mortgage loan, unsecured Loans, Heavy Equipment/Machinery Loans, Export Credit, LC, Bank guarantee facility etc looking to the need & requirement best suited to the clients.",
  },
  {
    id: 12,
    para: "Our firm has also been engaged previously for field audit and documentation on behalf of Standard Chartered Bank for their Supply Chain Finance product under Dealer Financing Flexi loan in M.P., Gujrat, Rajasthan, and in exceptional cases Haryana and Punjab.",
  },
];

const EmployeesPersonnel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <section
        ref={ref}
        className="relative w-full h-fit flex flex-col gap-4 md:gap-5 items-center p-2 my-4 md:px-[120px] md:py-8 overflow-hidden"
      >
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 1.2)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit text-start text-[#504e97] text-lg md:text-xl lg:text-2xl font-semibold mt-8"
          >
            Presently firm employees following personnel altogether including
            Head Office and others Branches
          </motion.p>
          <div className="w-full mt-4 md:mt-8">
            {employeesPersonnel.map((ep, index) => (
              <motion.div
                key={index}
                variants={fadeInOut("up", "tween", 0.2, ep.id * 0.5)}
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ amount: 0.5, once: false }}
                className="w-full h-fit grid grid-cols-2 p-4"
              >
                <span>{ep.head}</span>
                <span>{ep.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const employeesPersonnel = [
  { id: 1, head: "1. Articles", value: 15 },
  { id: 2, head: "2. Tax Assistance", value: 4 },
  { id: 3, head: "3. Adm. Staff", value: 3 },
  { id: 4, head: "4. Chartered Accountants", value: 3 },
  { id: 5, head: "5. Others Back Office staff", value: 3 },
];
