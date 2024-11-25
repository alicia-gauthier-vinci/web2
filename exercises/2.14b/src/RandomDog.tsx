import { Dog } from "../types"
import { useState, useEffect } from 'react'
import  "./RandomDog.css"

const RandomDog = () => {
  const [dog, setDog] = useState<Dog| undefined>(undefined);

  useEffect(() => {
    fetchDogImage();
    const interval = setInterval(fetchDogImage,5000);
    return () => clearInterval(interval);
  }, []);

  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
        const result = await response.json();
        setDog(result);
    } catch (error) {
      console.error("HomePage::error: ", error);
    }
  };

  return (
    <div>
      <h2> RANDOM DOG PICTURES</h2>
      <img src={dog?.message} alt="random-dog" className="dog-photo" />
    </div>

  );
}
export default RandomDog;