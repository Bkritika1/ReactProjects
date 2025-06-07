
import { useMemo

 } from "react";
const UsersList = ({ users }) => {
  const sortedUsers = useMemo(() => {
    console.log('Sorting users...');
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]); // 🔁 Only re-run if users change
  return (
    <ul>
      {sortedUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default  UsersList;



//useCallback and useMemo are React hooks used for performance optimization by memoizing values and functions. useCallback memoizes a function, ensuring it's the same instance across renders unless its dependencies change. useMemo memoizes a value, ensuring it's only recalculated when its dependencies change. React.memo memoizes an entire component, preventing re-renders when its props haven't changed.

/* react.memo: when a component is rerendered the children also get rerendered so we cover the children component in memo so that it doesn't get rerendered.
react.callback-function...when we use react.memo the immutable strings as prop do not rerender the component but the same prop that is a function will always rerender the component so we use react.callback...
useMemo-when we do a calculation over some things...if the things do not change the calculation will not change that is why we add the
"things" in the dependency in useMemo */




// ✅ 1. React.memo – Component yaad rakhna
// Sochiye aap ek Child component bana rahe ho, jo bar-bar re-render ho raha hai bina wajah ke. Aap usko kehte ho:

// "Agar mere props same hain, toh dobara mat render hona!"

// 🔤 Hindi Example:
// jsx
// Copy
// Edit
// const Child = React.memo(function Child({ name }) {
//   console.log("Child phir se render hua");
//   return <p>Namaste, {name}!</p>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Child name="Kritika" />
//       <button onClick={() => setCount(count + 1)}>Count Badhao</button>
//     </>
//   );
// }
// 📌 Isme kya ho raha hai?
// Jab aap button dabate ho, count badhta hai aur Parent component render hota hai.

// Lekin Child ka name wahi Kritika hai — toh React.memo yaad rakhta hai aur dobara render nahi karta.

// 🧠 Yaani component ko "yaad rakhna" agar uske props nahi badle ho.



// ✅ 2. useCallback – Function yaad rakhna
// Sochiye aap ek button click ka function Child ko bhej rahe ho. Har baar naya function ban raha hai, toh React.memo sochta hai:

// "Props badal gaye! Dobara render karna padega!"

// Toh useCallback bolta hai:

// "Nahi, function same hi hai, yaad rakh lo!"

// 🔤 Hindi Example:
// jsx
// Copy
// Edit
// const Child = React.memo(function Child({ onClick }) {
//   console.log("Child phir se render hua");
//   return <button onClick={onClick}>Mujhe Dabao</button>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button dabaya!");
//   }, []);

//   return (
//     <>
//       <Child onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Count +1</button>
//     </>
//   );
// }
// 📌 Kya seekha?
// useCallback function ko yaad rakhta hai.

// Taki har baar Child ko naya function na mile — purana hi mile.

// Ab React.memo bolega — "props same hain, render nahi karna."

// 🔧 Kab Use Karein?
// Situation	Kya Use Karein
// Bada component hai	React.memo()
// Function ko props mein bhej rahe ho	useCallback()
// Re-render slow ya unwanted hai	Memoization lagao


// React.memo only works if all props are exactly the same,
// but normal functions are always new — use useCallback to keep them stable.



