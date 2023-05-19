import React from 'react'

interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  //criando um enum
  category: category
}

export enum category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "python"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentsQty}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag} </span>
        ))}
      </div>
      <p>categoria: {category}</p>
    </div>
  )
}

export default Destructuring