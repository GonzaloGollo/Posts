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
      <ul style={{background:'lightgrey'}}>
        {comment.map(comment =>(
            <li key={comment.id}>
                <h4>{comment.name}</h4>
                <small>{comment.body}</small>
               
            </li>
            
        ))}
      </ul>
      </>
    )
}