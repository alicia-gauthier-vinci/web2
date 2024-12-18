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

export default App

/** 
 * la clé permet à react de savoir qu'il y a un changemnet, sans elle, 
 * la photo du chien ne changerait pas 
*/ 