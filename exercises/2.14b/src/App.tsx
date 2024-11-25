import './App.css'
import RandomDog from "./RandomDog"

function App() {

  return (
    <>
      <div className="container">
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>

    </>
  )
}

export default App

/** 
 * Les composants RandomDog n'ont pas besoin d'être recréés. 
 * Leur useEffect gère le rafraîchissement automatiquement grâce à setInterval.
*/ 