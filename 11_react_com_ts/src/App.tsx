import React, { createContext } from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import Destructuring, { category } from './components/Destructuring';
import State from './components/State';

// criando types
type textOrNull = string | null
type textFixed = "texto 1" | "texto 2" | "texto 3"

interface IAppContext {
  language: string
  framework: string
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "Valdo";
  const age: number = 34;
  const isWorking: boolean = false;

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - type
  const myText: textOrNull = "Teste"
  const myText2: textOrNull = null
  const myText3: textFixed = 'texto 1'
  const myText4: textFixed = 'texto 2'
  const myText5: textFixed = 'texto 3'
  // const myText6:textOrNull = 2 // não é possivel pois esta fora dos tipos

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }


  return (
    <AppContext.Provider value={contextValue}>

      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p> Está Trabalhando!</p>}
        -------------------
        <p>{userGreeting(name)}</p>
        ---------
        <FirstComponent />
        -----
        <SecondComponent name='Eu' />
        ---------
        <Destructuring
          title='Destructuring'
          content='destruturando o props'
          commentsQty={12}
          tags={['um', 'dois', 'aula 143']}
          category={category.TS}
        />

        <Destructuring
          title='Python'
          content='Python o props'
          commentsQty={1}
          tags={['Python']}
          category={category.P}
        />

        -------------
        <State />
        -------
        <p>Types </p>
        <p>texto 1: {myText}</p>
        <p>texto 2: {myText2}</p>
        <p>texto fixo 3: {myText3}</p>
        <p>texto fixo 4: {myText4}</p>
        <p>texto fixo 5: {myText5}</p>
      </div>
    </AppContext.Provider>

  );
}

export default App;
