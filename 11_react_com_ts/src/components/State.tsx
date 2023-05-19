import React, { useState, ChangeEvent } from 'react'

const State = () => {

  const [getText, setText] = useState<string | null>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <p>O texto é: {getText}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default State