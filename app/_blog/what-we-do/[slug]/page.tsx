import { SanityDocument } from "next-sanity";
import { singlewhatWeDoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { WWDDetailParams } from "@/lib/types";
import BlogPostDetail from "@/components/Blog/BlogPostDetail";

export default async function BlogDetailPage({ params }: WWDDetailParams) {
  const post = await sanityFetch<SanityDocument>({
    query: singlewhatWeDoQuery,
    params,
  });

  return <BlogPostDetail post={post} />;
}
