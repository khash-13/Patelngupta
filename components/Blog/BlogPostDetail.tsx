"use client";

import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import { fadeInOut } from "@/lib/utils";

interface BlogPostDetailProps {
  post: SanityDocument;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const {
    title,
    imageURL,
    authorName,
    authorBio,
    authorImage,
    categoryName,
    publishedAt,
    body,
  } = post;
  // console.log(post);

  return (
    <article className="w-full h-fit bg-gradient-to-b from-[#E7E8F4] to-white overflow-hidden">
      <div className="max-w-5xl p-4 lg:p-8 space-y-8 mx-auto">
        {imageURL && (
          <motion.div
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="w-full h-64 md:h-96 overflow-hidden rounded-lg"
          >
            <Image
              src={imageURL}
              alt={title}
              width={1920}
              height={1080}
              loading="eager"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <header className="space-y-4 overflow-hidden">
          <motion.h2
            variants={fadeInOut("down", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
          >
            {title}
          </motion.h2>
          <motion.div
            variants={fadeInOut("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            animate="show"
            exit="exit"
            className="text-sm text-gray-500 flex justify-between flex-col md:flex-row gap-2"
          >
            {/* {categoryName && <span>{categoryName} • </span>} */}
            <time>{new Date(publishedAt).toLocaleDateString()}</time>
            <div className="w-fit h-fit max-w-[40vw] lg:max-w-52 space-y-2">
              <span className="text-sm text-zinc-500">Author</span>
              <div className="w-fit h-fit flex gap-2 items-center lg:space-x-4">
                {authorImage && (
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={authorImage}
                      alt={authorName}
                      width={1920}
                      height={1080}
                      loading="eager"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <span className="text-md font-semibold text-gray-800">
                    {authorName}
                  </span>
                  {authorBio && authorBio.length > 0 && (
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {authorBio[0]?.children[0]?.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        <div className="lg:flex lg:space-x-4">
          <section className="w-full prose lg:prose-xl text-gray-700 space-y-2 md:space-y-4">
            {body &&
              body.map((p: { children: [{ text: string }] }, index: number) => (
                <motion.p
                  key={index}
                  variants={fadeInOut("down", "tween", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  className="text-lg text-gray-600 text-justify"
                >
                  {p.children[0]?.text}
                </motion.p>
              ))}
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
