"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { PiHandshakeLight } from "react-icons/pi";
import { SanityDocument } from "next-sanity";

const Article = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full h-fit flex items-center justify-center bg-white  p-4 lg:px-[120px] overflow-hidden"
    >
      <div className="w-full max-w-screen flex flex-col gap-4 md:gap-5 items-center p-4 md:px-8 py-16">
        <motion.p
          variants={fadeInOut("down", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="flex-center rounded-full bg-zinc-300 text-sm md:text-lg font-light shadow-lg px-5 py-3 text-center"
        >
          <PiHandshakeLight size={20} className="mr-1" />
          Expert Guidance for Your Tax Relief Needs
        </motion.p>
        <motion.h2
          variants={fadeInOut("down", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="text-center text-2xl md:text-4xl font-extrabold"
        >
          Tailored Services Designed for Your Business
        </motion.h2>
        <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-8">
          {posts.slice(0, 3).map((article, index) => (
            <motion.div
              variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index || article._id}
              className="group border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={article.imageURL}
                  alt={article.title}
                  // width={1280}
                  // height={720}
                  width={1920}
                  height={1080}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-lg font-bold line-clamp-2 mb-1">
                  {article.title}
                </h3>
                <Link
                  href={`/blog/post/${article.authorSlug?.current}/${article.slug?.current}`}
                  className="inline-flex items-center text-zinc-900 transition-colors duration-300 group-hover:underline underline-offset-4 text-sm"
                  prefetch={false}
                  aria-label={`Learn more about ${article.title}`}
                >
                  Read More
                  <MdArrowForward className="ml-1 w-4 h-4 -rotate-45" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
