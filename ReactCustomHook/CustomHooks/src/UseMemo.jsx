import React, { useState, useMemo } from "react";

export default function UseMemos() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // 🧠 Heavy calculation
  const expensiveCalculation = useMemo(() => {
    // console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]); // 💡 Only recalculate if 'count' changes

  return (
    <div>
      <h2>Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Change Other</button>
    </div>
  );
}
