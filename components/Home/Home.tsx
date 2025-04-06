import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import WhatWeDo from "./WhatWeDo";
import JoinUs from "./JoinUs";
import About from "./About";
import Article from "./Article";
import { postsQuery, whatWeDoQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import FAQs from "./FAQs";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const whatWeDos = await sanityFetch<SanityDocument[]>({
    query: whatWeDoQuery,
  });

  return (
    <main className="w-full h-full overflow-hidden">
      <Hero />
      <Service />
      <About />
      <WhatWeDo whatWeDos={whatWeDos} />
      <Article posts={posts} />
      <JoinUs />
      <FAQs />
    </main>
  );
}
