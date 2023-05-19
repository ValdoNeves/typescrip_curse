/**
 * 3 - componente utilizando o plugin de typescript com o comando tsrfc
 *  tsrfc -> significa TypeScript React Function Component
 * 
 * plugin : ES7+ React/Redux/React-Native snippet
 **/

import React, { ReactElement } from 'react'

function FirstComponent():ReactElement {
  return (
    <div>
      Meu primeiro componente
    </div>
  )
}

export default FirstComponent