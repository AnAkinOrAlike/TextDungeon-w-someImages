import { useState } from 'react'
import './App.css'

let palabra = "Fuego";
let truePal = palabra.split("");
let guess = "W";
function Letras() {

}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Bienvenido a mi juego del ahorcado</h1>
      <p>Encuentra todas las letras de la palabra</p>
      <div className='guessesBlock'>
        <div className='blocked'>{truePal[0]}</div>
        <div className='blocked'>{truePal[1]}</div>
        <div className='blocked'>{truePal[2]}</div>
        <div className='blocked'>{truePal[3]}</div>
        <div className='blocked'>{truePal[4]}</div>
      </div>
    </>
  )
}

export default App
