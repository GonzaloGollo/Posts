import Link from "next/link.js";

const fetchSingleComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 5,
    },})
.then(res => res.json());
};

export default async function Comments({params}){
    const {id} = params;
    const comment = await fetchSingleComments(id);
    
    return(
    <>
        <h2>Aca van nuestro Comment {id}</h2>
      <ul>
        {comment.map(comment =>(
            <li key={comment.id}>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
            </li>
        ))}
      </ul>
      </>
    )
}