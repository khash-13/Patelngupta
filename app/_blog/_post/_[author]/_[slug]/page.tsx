// import { SanityDocument } from "next-sanity";
// import { singlePostQuery } from "@/sanity/lib/queries";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { BlogPostDetailParams } from "@/lib/types";
// import BlogPostDetail from "@/components/Blog/BlogPostDetail";

// export default async function BlogPostDetailPage({
//   params,
// }: BlogPostDetailParams) {
//   const post = await sanityFetch<SanityDocument>({
//     query: singlePostQuery,
//     params,
//   });

//   return <BlogPostDetail post={post} />;
// }

import React from 'react'

function page() {
  return (
    <div>
      {/* This exist here for build */}
    </div>
  )
}

export default page