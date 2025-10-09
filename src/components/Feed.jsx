import React from 'react'

const posts = [
    { id: 1, autor: "Ana", texto: "Primeiro post!" },
    { id: 2, autor: "Leo", texto: "React é top!" },
    { id: 3, autor: "Pietraaaaa", texto: "dadadadadada!" },
    { id: 4, autor: "cadadad", texto: "dadadadadada!" },
    { id: 5, autor: "dadadad", texto: "dadadadadada!" },
    { id: 6, autor: "dadadad", texto: "dadadadadada!" },
];

const Post = ({autor, texto}) => {
  return (
    <article>
        <strong>{autor}</strong>
        <p>{texto}</p>
    </article>
  )
}


const Feed = () => {
  return posts.map(post => <Post key ={post.id} {...post}/>);
}

export default Feed