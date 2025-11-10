// Create a Search Filter that filters a static list of countries as the user types.

import { useState } from "react"

// import { useState } from "react"

// const Country = [
//     "India", "Afganistan", "Russia", "Africa", "America" 
// ]
// export default function Countries(){
//   const [country, SetCountry] = useState();
//     const filtered = Country.filter((coun)=>{

//     })
//     return(
//      <div>
//      <input placeholder="Serach Countries "/>
//       {filtered.map((coun)=>{
//         <ul>{coun}</ul>
//       })}
//      </div>
  
//     )
//   }


//   "Build a Login Form with Email and Password.
// Show validation errors if fields are empty.
// Disable submit until both are valid."


export default  function LoginForm(){
  const [email,Setemail] = useState('')
  const [Password,Setpassword] = useState('')
 const [error, setError] = useState('');


  const  handleSubmit = (e)=>{
    if (!email || !Password) {
setError('Please fill in all fields.');
return;
}


setError('');
alert(`Logged in as: ${email}`);
} 
  
  
  return(
    <div>
      <h1>Login Form</h1>
     <label>Password
      <input type="text" placeholder="Name" onSubmit={handleSubmit} onChange={(e)=>Setpassword(e.target.value)}/>
     </label>
     <label>
      Email
      <input type="text" placeholder="mail" onSubmit={handleSubmit} onChange={(e)=> Setemail(e.target.value)}/>
     </label>
     <button type="submit">Submit</button>
    </div>
  )
}