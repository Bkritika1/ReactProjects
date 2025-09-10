

// function Makediv() {
//     return(
//         <>
//         <div style={{width:'40px', height:'40px', padding:'10px',color:'red'}}>Hey ia am a Div i am Block level Element</div>
//         </>
//     )
// }

// export default Makediv;

// Makediv.jsx
// function Makediv() {
//   return (
//     <div
//       style={{
//         width: "40px",
//         height: "40px",
//         padding: "10px",
//         color: "red",
//         border: "1px solid black",
//         margin: "5px",
//       }}
//     >
//       Hey I am a Div (Block Element)
//       <div>i am a inner div</div>
//     </div>
//   );
// }

// export default Makediv;

// function Makediv({ children = [] }) {
//   return (
//     <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
//       Hey I am a Div (Block Element)
//       {(children || []).map((child, idx) => (
//         <div
//           key={child.id || idx}
//           style={{
//             border: "1px dashed blue",
//             margin: "5px",
//             padding: "5px",
//           }}
//         >
//           I am inner div #{child.id}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Makediv;

// function Makediv({ children = [] }) {
//   return (
//     <div
//       style={{
//         width: "150px",
//         minHeight: "40px",
//         padding: "10px",
//         color: "red",
//         border: "1px solid black",
//         margin: "5px",
//       }}
//     >
//       Hey I am a Div (Block Element)
//       {children.map((child, idx) => (
//         <div
//           key={child.id || idx}
//           style={{
//             border: "1px dashed blue",
//             margin: "5px",
//             padding: "5px",
//           }}
//         >
//           I am inner div #{child.id} hey
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Makediv;

export default function Makediv({ index }) {
  return (
    <div>
      <div
        className="parent"
        style={{
          width: "200px",
          height: "60px",
          background: "lightcoral",
          border: "1px solid red",
          margin: "5px",
        }}
      >
        Parent Div #{index}
      </div>
      <div
        className="child"
        style={{
          width: "160px",
          height: "80px",
          background: "lightblue",
          border: "1px dashed blue",
          margin: "5px",
        }}
      >
        Child of #{index}
      </div>
    </div>
  );
}
