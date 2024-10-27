import { useState } from "react";
import "./colorChange.css";


const colors = [ "red", "green", "blue", "yellow", "purple"]

const Colors = () => {

  const [currentColorIndex, nextColorIndex] = useState(0);

  const handleChange = () => {
    nextColorIndex((currentColorIndex +1) % colors.length);
  }

  return(

    <div 
    className="color-box"
    style={{ backgroundColor: colors[currentColorIndex] }}
    >
      <button 
      className="color-box__button"
      onClick={handleChange}>
        {colors[(currentColorIndex + 1) % colors.length]}
      </button>
      <h3>{colors[currentColorIndex]}</h3>
    </div>
  );
}

export default Colors;