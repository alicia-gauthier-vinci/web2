import { useState, useEffect } from 'react'
import './App.css'
import { Joke } from "../types"

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    const fetchJoke = () => {
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((response) => {
          if (!response.ok)
            throw new Error(
              `fetch error : ${response.status} : ${response.statusText}`
            );
          return response.json();
        })
        .then((result) => {
          setJoke(result);
        })
        .catch((err) => {
          console.error("HomePage::error: ", err);
        });
    };
    

    fetchJoke();
    const interval = setInterval(fetchJoke, 5000);
    return () => clearInterval(interval);
  }, []);
      
  return (
    <>
      <p> <strong>Joke category :</strong> {joke?.category}</p>
      <p> <strong>Joke :</strong> {joke?.joke}</p>
    </>
  )
}

export default App
