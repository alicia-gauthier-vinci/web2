import { useState } from "react";

interface ClickCounterProps {
  title: string;
  message?: string
}

const ClickCounter = ({ title, message }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      {count >= 10 ? <p>{message}</p> : null}
    </div>
  );
}

export default ClickCounter;