import { redirect } from "next/navigation";

export default function BlogMainPage() {
  redirect("/blog/post");
  return <div>please redirect to the blog/post or blog/what-we-do</div>;
}
