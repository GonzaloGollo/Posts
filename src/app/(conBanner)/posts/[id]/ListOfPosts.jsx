"use client";
import Link from "next/link";
// import next from "next/types";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
    // console.log("Actualizando Data")
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },})
.then(res => res.json());
};
export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className="post">
        <Link href='/posts.[id]' as={`/posts/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </Link>
      <LikeButton id={post.id} />
    
    </article>
  ));
}
