import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import WhatWeDo from "./WhatWeDo";
import JoinUs from "./JoinUs";
import About from "./About";
import FAQs from "./FAQs";

export default async function Home() {

  return (
    <main className="w-full h-full overflow-hidden">
      <Hero />
      <Service />
      <About />
      <WhatWeDo />
      {/* <Article posts={posts} /> */}
      <JoinUs />
      <FAQs />
    </main>
  );
}
