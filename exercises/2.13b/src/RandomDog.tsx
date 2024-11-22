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
/**
 * je ne comprends pas cette formulation dans la correction 
 *  setDog({
          message: data.message ?? "No dog found",
          status: data.status ?? "Error",
        });
 */
export default RandomDog;