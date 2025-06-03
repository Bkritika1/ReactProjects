// 4. Create a simple interval timer using setInterval and clear it on unmount  
//    - Set up an interval inside useEffect that increases a number every second. Make sure to return a cleanup function that clears the interval when the component unmounts.


import { useEffect, useState } from "react";

export default function Question4() {
    const [number, SetNumber] = useState(0);

    //  const id = 1;

    useEffect(() => {
        const id = setInterval(SetNumber(prev =>
            prev + 1
        ),1000)
      
        return () =>clearInterval(id)
              
        
    }, [number])

    return (
        <h1>{number}</h1>
    )
}


