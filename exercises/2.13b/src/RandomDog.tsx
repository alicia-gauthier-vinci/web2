import { Dog } from "../types"
import { useState, useEffect } from 'react'

import  "./RandomDog.css"

const RandomDog = () => {
  const [dog, setDog] = useState<Dog| undefined>(undefined);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((result) => setDog(result))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <div>
      <h2> RANDOM DOG PICTURES</h2>
      <img src={dog?.message} alt="random-dog" className="dog-photo" />
    </div>

  );
}

export default RandomDog;