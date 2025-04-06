import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import Blog from "@/components/Blog/Blog";

export default async function BlogPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  // console.log(posts);

  return <Blog posts={posts} page="post" />;
}
