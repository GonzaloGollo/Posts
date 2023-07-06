import Image from "next/image";
// export default function PostsLayout({children}){
//     return(
//         <div>
//             <h1>Este es el el Layout de los Posts</h1>
//             {children}
//         </div>
//     )
// }
import Link from "next/link.js";
import {ListOfPosts} from "./ListOfPosts.jsx"

const fetchSinglePosts = (id) => {
    // console.log("Actualizando Data")
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 5,
    },})
.then(res => res.json());
};

export default async function Posts({children, params}){
    // const {id} = params;
    const {id} = params;
    const post = await fetchSinglePosts(id);
    
    return(
        <>
       
        <h2>Aca van nuestro Post {id}</h2>
      
        <article key={post.id}>
        <div><h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
        {children}
        </div>

        </article>
       
        </>
    )
}