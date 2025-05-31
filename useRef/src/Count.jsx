import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleCounts() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  return (
    <>
      <button onClick={handleCounts}>Click me</button>
      <p>Count: {count}</p>
    </>
  );
}
