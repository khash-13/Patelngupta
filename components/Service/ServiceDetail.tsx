"use client";

import { services } from "@/lib/data";
import { ServiceValues } from "@/lib/types";
import { fadeInOut } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServiceDetail = ({ slug }: { slug: string }) => {
  console.log(slug);

  const service = services.find((srv: ServiceValues) => srv.slug === slug);

  // If the service is not found, you might want to handle this case gracefully
  if (!service) {
    return <div className="text-center mt-10 text-xl">Service not found</div>;
  }

  return (
    <>
      <main className="w-full h-fit space-y-10 bg-gradient-to-b from-[#E7E8F4] to-white p-4 lg:px-[170px] lg:py-[100px] overflow-hidden">
        <motion.div
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          animate="show"
          className="w-full h-fit"
        >
          <div className="flex-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-full mx-auto">
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
            />
          </div>
        </motion.div>
        <div className="w-full h-fit">
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit mt-2 text-center text-2xl md:text-3xl lg:text-5xl text-[#161540] text-balance font-black leading-10 lg:leading-[65px]"
          >
            {service.title}
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 1.2)}
            initial="hidden"
            whileInView="show"
            animate="show"
            className="w-full h-fit text-center text-[#504e97] text-md md:text-lg lg:text-xl mt-5"
          >
            {service.description}
          </motion.p>
          {service.servicesIinclude && (
            <motion.p
              variants={fadeInOut("down", "tween", 0.2, 1.2)}
              initial="hidden"
              whileInView="show"
              animate="show"
              className="w-full h-fit text-start text-[#504e97] text-lg md:text-xl lg:text-2xl font-semibold mt-8"
            >
              {service.servicesIinclude}
            </motion.p>
          )}
          {/* <div className="relative w-full h-full flex justify-between gap-2 br"> */}
          <div className="w-full space-y-4 md:space-y-6 mt-8">
            {service.isDetail &&
              service.detail &&
              service.detail.map((detail, index) => (
                <motion.p
                  key={index}
                  variants={fadeInOut("up", "tween", 0.2, detail.id * 0.5)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  viewport={{ amount: 0.5, once: false }}
                  className="w-full h-fit text-[#504e97] text-md md:text-lg lg:text-xl"
                >
                  {detail.para}
                </motion.p>
              ))}
          </div>
          {/* <div className="hidden md:block sticky top-10 w-1/2 h-fit rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-vector/auditing-tax-process-accounting-concept_108855-6341.jpg?semt=ais_hybrid"
                alt="Audit and Assurance Services"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div> */}
          {service.taxes &&
            service.taxes.map((tax, index) => (
              <div key={index} className="mt-8 space-y-4">
                <motion.p
                  variants={fadeInOut("down", "tween", 0.2, tax.id * 0.5)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  className="w-full h-fit text-start text-[#504e97] text-lg md:text-xl lg:text-2xl font-semibold"
                >
                  <span className="underline underline-offset-8">
                    {tax.head}
                  </span>{" "}
                  :
                </motion.p>
                <motion.p
                  key={index}
                  variants={fadeInOut("up", "tween", 0.2, tax.id * 0.8)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  viewport={{ amount: 0.5, once: false }}
                  className="w-full h-fit text-[#504e97] text-md md:text-lg lg:text-xl text-balance"
                >
                  {tax.para}
                </motion.p>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default ServiceDetail;
