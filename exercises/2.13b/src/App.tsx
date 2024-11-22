import './App.css'
import RandomDog from "./RandomDog"
import { useState } from 'react'

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  }
  return (
    <>
      <div className="container">
        <RandomDog key={`${refresh}1`}/>
        <RandomDog key={`${refresh}2`}/>
        <RandomDog key={`${refresh}3`}/>
      </div>

      <button
        onClick={handleRefresh}> Refrech dogs
      </button>
    </>
  )
}
/** 
 * je ne comprends pas de quelle manière l'api détecte le fait 
 * qu'elle doive rendre différents chien chaque fois, est ce grace aux clés ?
*/ 

export default App
