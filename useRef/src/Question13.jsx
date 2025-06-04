// 13. Create a countdown timer with useEffect  
//    - Start a countdown from a certain number (e.g., 10). Use useEffect with setInterval to decrease the number every second, and clear the interval when it reaches 0.

// import { useEffect, useState } from "react";


// export default function Question13() {

//     const [number, setNumber] = useState(10)



//     useEffect(() => {

//         if (number <= 0) return;

//         setInterval(() => {
//             setNumber(number - 1)
//         }, 1000)

//         return () => clearInterval()

//     }, [number])

//     return (


//         <h1>{number}</h1>

//     )
// }


import { useEffect, useState } from "react";

export default function Question13() {
  const [number, setNumber] = useState(10);

  useEffect(() => {
    if (number <= 0) return;

    const intervalId = setInterval(() => {
      setNumber(number - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [number]); 

  return <h1>{number}</h1>;
}
