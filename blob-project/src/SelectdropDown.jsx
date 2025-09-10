//  import { useState } from "react";
// const options = ["Google", "Safari", "Edge", "Firefox"];
// export default  function SelectdropDown(){

//     return(
//         <>
//             <div>
//                 <select>

//                 </select>
//             </div>
//         </>
//     )
// }
// import { useState } from "react";

// const options = ["Google", "Safari", "Edge", "Firefox"];

// export default function SelectDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div style={{ position: "relative", width: "200px" }}>
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           border: "1px solid gray",
//           padding: "10px",
//           cursor: "pointer",
//           background: "#fff",
//         }}
//       >
//         {selectedOption || "Select a browser"}
//       </div>

//       {isOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: "40px",
//             left: 0,
//             right: 0,
//             border: "1px solid gray",
//             background: "#fff",
//             zIndex: 10,
//           }}
//         >
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               style={{ padding: "10px", cursor: "pointer" }}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import { useState } from "react";

const options = ["Google", "Safari", "Edge", "Firefox"];

export default function SelectDropdown(){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionClick =(option) =>{
    setSelectedOption(option)
    setIsOpen(false);
  }

  return(
    <div style={{border: "1px solid black"}}>
      <div
         onClick ={()=> setIsOpen(!isOpen)}
      >
       {selectedOption || "select a option"}
      </div>

      {isOpen && (
        <div style={{
          border: "1px solid gray",
          background: "#fff",
          position: "absolute",
          zIndex: 10,
          width: "200px"
        }}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

