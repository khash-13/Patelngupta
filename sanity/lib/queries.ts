import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "authorSlug": author->slug
}`;

// author->name == $author &&
export const singlePostQuery = groq`*[_type == "post" &&  slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  body,
  "authorName": author->name,
  "authorBio": author->bio,
  "authorImage": author->image.asset->url,
  "categoryName": category->title,
  "categorySlug": category->slug.current,
  publishedAt,
  "slug": slug.current,
  "imageURL": mainImage.asset->url,
}`;

// Get all what-we-do
export const whatWeDoQuery = groq`*[_type == "what-we-do"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "authorSlug": author->slug,
  body,
}`;

// author->name == $author &&
export const singlewhatWeDoQuery = groq`*[_type == "what-we-do" &&  slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  body,
  "authorName": author->name,
  "authorBio": author->bio,
  "authorImage": author->image.asset->url,
  "categoryName": category->title,
  "categorySlug": category->slug.current,
  publishedAt,
  "slug": slug.current,
  "imageURL": mainImage.asset->url,
}`;

export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current
}`;

// // Get a single post by its slug
// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
//     title, description, mainImage, body
//   }`;

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
//   }`;
