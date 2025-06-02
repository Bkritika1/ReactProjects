
// 7. Fetch data only when a button is clicked (conditional fetch with useEffect)  
//    - Create a "Load Data" button. When clicked, update a state variable like shouldFetch to true. Use useEffect to fetch data only when shouldFetch becomes true.

import { useEffect, useState } from "react";

export default function Question7() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [data, setData] = useState([]);

  function handleFetchClick() {
    setShouldFetch(true);
  }

  useEffect(() => {
    if (shouldFetch) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => setData(json));
    }
  }, [shouldFetch]);

  return (
    <div>
      <button onClick={handleFetchClick}>Load Data</button>
      {data.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}
