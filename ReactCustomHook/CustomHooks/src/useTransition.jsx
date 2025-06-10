
//useTransition is a React Hook that lets you render a part of the UI in the background.
//useTransition does not take any parameters.
// useTransition does not take any parameters.
//useTransition returns an array with exactly two items:

//The isPending flag that tells you whether there is a pending Transition.
//The startTransition function that lets you mark updates as a Transition.



import React, { useState, useTransition } from "react";

function FruitFilter() {
  const [input, setInput] = useState("");                // User input
  const [filteredFruits, setFilteredFruits] = useState([]); // Filtered result
  const [isPending, startTransition] = useTransition();  // Transition setup

  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Papaya"
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); // Fast update

    startTransition(() => {
      const results = fruits.filter(fruit =>
        fruit.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFruits(results);
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🍓 Fruit Filter (with useTransition)</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type fruit name..."
        style={{ padding: "10px", width: "250px" }}
      />

      {isPending && <p>⏳ Filtering...</p>}

      <ul style={{ marginTop: "10px" }}>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default FruitFilter;



//both are used for lagfreeui
// 🔧 Hook	Kab use karte hain?	Kya karta hai?
// useTransition()	Jab tum koi slow kaam ko delay karna chahte ho (e.g. filtering, switching tabs)	React ko bolta hai: "Ye update background mein karo"
// useDeferredValue()	Jab tum kisi value ko slow update karna chahte ho (e.g. input ke basis pe filtering)	Value ko delay karta hai, taaki UI freeze na ho
