"use client";

import { useRef } from "react";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";
import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

const Blog = ({
  posts = [],
  page,
}: {
  posts?: SanityDocument[];
  page: string;
}) => {
  // console.log(posts);

  return (
    <>
      <main className="w-full h-full overflow-hidden">
        <Hero page={page} />
        {posts && <Posts posts={posts} page={page} />}
      </main>
    </>
  );
};

export default Blog;

const Hero = ({ page }: { page: string }) => {
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
            {page === "post" ? "Our Blog Posts" : "What We Do"}
          </motion.p>
          <motion.p
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-full h-fit mt-2 text-center text-xl lg:text-[60px] text-[#161540] text-balance font-extrabold leading-5 md:leading-8 lg:leading-[65px]"
          >
            {page === "post"
              ? "We’re making work meaningful for everyone, everywhere."
              : "We create meaningful work experiences."}
          </motion.p>
        </div>
      </section>
    </>
  );
};

const Posts = ({
  posts = [],
  page,
}: {
  posts: SanityDocument[];
  page: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full h-fit p-4 md:px-8 py-16 overflow-hidden"
    >
      {page === "post" && (
        <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              variants={fadeInOut("up", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="group border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={post.imageURL}
                  alt={post.title}
                  width={1920}
                  height={1080}
                  loading="eager"
                  priority
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold line-clamp-2 mb-1">
                  {post.title}
                </h3>
                <Link
                  href={`/blog/post/${post.authorSlug?.current}/${post.slug?.current}`}
                  className="inline-flex items-center text-zinc-900 transition-colors duration-300 group-hover:underline underline-offset-4 text-sm"
                  prefetch={false}
                  aria-label={`Learn more about ${post.title}`}
                >
                  Read More
                  <MdArrowForward className="ml-1 w-4 h-4 -rotate-45" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {page === "what-we-do" && (
        <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map(({ _id, title, imageURL, slug, body }, index) => (
            <motion.div
              variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index || _id}
              className="group text-black p-4"
            >
              <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={imageURL}
                  alt={title}
                  width={1920}
                  height={1080}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-4 md:py-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-1">{title}</h3>
                <p className="text-zinc-800 mb-4 text-sm line-clamp-3">
                  {body[0].children[0]?.text}
                </p>
                <Link
                  href={`/blog/what-we-do/${slug?.current}`}
                  className="inline-flex items-center text-zinc-700 transition-colors duration-300 group-hover:underline underline-offset-4"
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
      )}
    </section>
  );
};
