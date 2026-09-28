import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { whatWeDoQuery } from "@/sanity/lib/queries";
import Blog from "@/components/Blog/Blog";

export default async function BlogPage() {
  const whatWeDos = await sanityFetch<SanityDocument[]>({
    query: whatWeDoQuery,
  });
  // console.log(whatWeDos);

  return <Blog posts={whatWeDos} page="what-we-do" />;
}
