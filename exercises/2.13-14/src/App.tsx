import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { Joke } from "../types"

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      //récupère le body dans setJoke, on récupère la catégorie et la blague dans la vue
      .then((result) => setJoke(result))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <>
      <p> <strong>Joke category :</strong> {joke?.category}</p>
      <p> <strong>Joke :</strong> {joke?.joke}</p>
    </>
  )
}

export default App
