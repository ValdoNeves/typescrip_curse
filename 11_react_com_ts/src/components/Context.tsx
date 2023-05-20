import React, { useContext } from 'react'

import { AppContext } from '../App'

const Context = () => {

  const details = useContext(AppContext)
  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Fw: {details.framework}</h4>
          <h4>QTD: {details.projects}</h4>
        </div>
      )}
    </>
  )
}

export default Context