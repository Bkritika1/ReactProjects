
// 6. Fetch data from an API on component mount (e.g., users from JSONPlaceholder)  
//    - Use useEffect to fetch data (like a list of users) from an API when the component first loads. Store the result in state and display it. Use the empty dependency array to run it only once.



import { useEffect, useState } from "react";

 export default function Question6(){
const[ data, setData] = useState([]);


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setData(json))
},[])

   return (
  <div>
    {data.map(user => (
      <p key={user.id}>{user.name} {user.age}</p>
    ))}
  </div>
);
 }