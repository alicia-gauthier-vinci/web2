import { useState } from "react";

interface ClickCounterProps {
  title: string;
  message10click?: string
  messageSouris?: string
}

const ClickCounter = ({ title, message10click, messageSouris }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [hovered, setButtonHovered] = useState(false);

  const handleClick = () => {
    setButtonHovered(!hovered);
  }

  return (
    <div>
      <h4>{title}</h4>
      <p>{hovered ? messageSouris : null}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
      >
        count is {count}
      </button>
      {count >= 10 ? <p>{message10click}</p> : null}
    </div>
  );
}

export default ClickCounter;