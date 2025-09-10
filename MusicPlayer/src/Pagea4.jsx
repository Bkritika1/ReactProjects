

// export default function page() {
//     return(
//         <div className=".resumeView" style={{width:'794px',height:'1123px',backgroundColor:'grey'}}>

//         </div>
//     )
// }

// page.jsx
// "use client"; // if you're in Next.js app router

// import { useState } from "react";
// import Makediv from "./Makediv";

// export default function Page() {
//   const [divs, setDivs] = useState([]); // array to store added divs

//   const handleAddDiv = () => {
//     // add a new div entry
//     setDivs([...divs, {}]);
//   };

//   return (
//     <>
//       {/* Resume Page */}
//       <div
//         className="resumeView"
//         style={{
//           width: "794px",
//           height: "1123px",
//           backgroundColor: "grey",
//           padding: "20px",
//           overflowY: "auto", // so content scrolls if too big
//         }}
//       >
//         {/* Render all the divs here */}
//         {divs.map((_, index) => (
//           <Makediv key={index} />
//         ))}
//       </div>

//       {/* Add button below */}
//       <button
//         onClick={handleAddDiv}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Add Div
//       </button>
//     </>
//   );
// }


// "use client";
// import { useState, useRef, useLayoutEffect } from "react";
// import Makediv from "./Makediv";

// const PAGE_HEIGHT = 1123; // A4 height (px)

// export default function Page() {
//   const [pages, setPages] = useState([[]]); // har page ek array of divs hoga
//   const pageRefs = useRef([]); // to measure height of pages

//   const handleAddDiv = () => {
//     setPages((prevPages) => {
//       const newPages = [...prevPages];
//       const lastPageIndex = newPages.length - 1;

//       // add temp div in last page
//       newPages[lastPageIndex] = [...newPages[lastPageIndex], {}];
//       return newPages;
//     });
//   };

//   // After rendering, measure height
//   useLayoutEffect(() => {
//     if (!pageRefs.current) return;

//     pages.forEach((_, pageIndex) => {
//       const pageEl = pageRefs.current[pageIndex];
//       if (pageEl) {
//         const height = pageEl.scrollHeight; // total content height with padding
//         if (height > PAGE_HEIGHT) {
//           // Overflow detected
//           setPages((prev) => {
//             const newPages = [...prev];
//             const lastPage = newPages[pageIndex];
//             const overflowDiv = lastPage.pop(); // remove last added div

//             // create next page if not exists
//             if (!newPages[pageIndex + 1]) newPages[pageIndex + 1] = [];
//             newPages[pageIndex + 1] = [overflowDiv, ...newPages[pageIndex + 1]];

//             return newPages;
//           });
//         }
//       }
//     });
//   }, [pages]);

//   return (
//     <>
//       {/* Render all pages */}
//       {pages.map((divs, pageIndex) => (
//         <div
//           key={pageIndex}
//           ref={(el) => (pageRefs.current[pageIndex] = el)}
//           style={{
//             width: "794px",
//             height: PAGE_HEIGHT + "px",
//             backgroundColor: "grey",
//             padding: "20px",
//             marginBottom: "30px",
//             overflow: "hidden", // A4 clipping
//             boxSizing: "border-box",
//           }}
//         >
//           {divs.map((_, index) => (
//             <Makediv key={index} />
//           ))}
//         </div>
//       ))}

//       {/* Add Div Button */}
//       <button
//         onClick={handleAddDiv}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Add Div
//       </button>
//     </>
//   );
// }


// "use client";
// import { useState, useRef, useLayoutEffect } from "react";

// const PAGE_HEIGHT = 300; // chhoti rakhi for demo, A4 = 1123px

// // Makediv with children list
// function Makediv({ children }) {
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
//           key={idx}
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

// export default function Page() {
//   const [pages, setPages] = useState([[{ id: 1, children: [] }]]);
//   const pageRefs = useRef([]);

//   const handleAddInnerDiv = () => {
//     setPages((prev) => {
//       const newPages = [...prev];
//       const lastPage = newPages[newPages.length - 1];
//       const lastParent = lastPage[lastPage.length - 1];

//       // add inner child to last parent
//       lastParent.children.push({ id: Date.now() });

//       return [...newPages];
//     });
//   };

//   useLayoutEffect(() => {
//     pages.forEach((parents, pageIndex) => {
//       const pageEl = pageRefs.current[pageIndex];
//       if (!pageEl) return;

//       const height = pageEl.scrollHeight;
//       if (height > PAGE_HEIGHT) {
//         // overflow detected → last parent's last child nikaalna hoga
//         setPages((prev) => {
//           const newPages = [...prev];
//           const lastParent = newPages[pageIndex][newPages[pageIndex].length - 1];
//           const overflowChild = lastParent.children.pop();

//           // next page bana lo agar nahi hai
//           if (!newPages[pageIndex + 1]) {
//             newPages[pageIndex + 1] = [];
//           }

//           // next page me same parent ka continuation dhoondo
//           let nextParent =
//             newPages[pageIndex + 1][newPages[pageIndex + 1].length - 1];
//           if (!nextParent || nextParent.id !== lastParent.id) {
//             nextParent = { id: lastParent.id, children: [] };
//             newPages[pageIndex + 1].push(nextParent);
//           }

//           // overflow child ko daalo usme
//           nextParent.children.push(overflowChild);

//           return newPages;
//         });
//       }
//     });
//   }, [pages]);

//   return (
//     <>
//       {pages.map((parents, pageIndex) => (
//         <div
//           key={pageIndex}
//           ref={(el) => (pageRefs.current[pageIndex] = el)}
//           style={{
//             width: "500px",
//             height: PAGE_HEIGHT + "px",
//             backgroundColor: "lightgrey",
//             marginBottom: "20px",
//             padding: "10px",
//             overflow: "hidden",
//           }}
//         >
//           {parents.map((parent) => (
//             <Makediv key={parent.id} children={parent.children} />
//           ))}
//         </div>
//       ))}

//       <button
//         onClick={handleAddInnerDiv}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//         }}
//       >
//         Add Inner Div
//       </button>
//     </>
//   );
// }

// import { useState, useRef, useEffect,useLayoutEffect } from "react";
// import Makediv from "./Makediv";
// export default function PageA4() {
//   const PAGE_HEIGHT = 300; // A4 height
//   const [divs, setDivs] = useState([]);
//   const [pages, setPages] = useState([[]]); // Array of pages (each page = array of items)
//   const containerRefs = useRef([]);

//   // Add new div
//   const addDiv = () => {
//     setDivs((prev) => [...prev, prev.length + 1]);
//   };

//   // Pagination logic
//   useEffect(() => {
//     if (!divs.length) return;

//     const newPages = [[]]; // first page empty
//     let currentHeight = 0;

//     divs.forEach((d, i) => {
//       const el = containerRefs.current[i];
//       if (!el) return;

//       const parentHeight = el.offsetHeight;

//       // Check if parent fits fully
//       if (currentHeight + parentHeight <= PAGE_HEIGHT) {
//         newPages[newPages.length - 1].push(d);
//         currentHeight += parentHeight;
//       } else {
//         // parent does not fully fit -> check children
//         const children = Array.from(el.children);
//         let parentAdded = false;

//         children.forEach((child) => {
//           const childHeight = child.offsetHeight;

//           if (currentHeight + childHeight > PAGE_HEIGHT) {
//             // make new page
//             newPages.push([]);
//             currentHeight = 0;
//           }

//           if (!parentAdded) {
//             // Add parent container if not added yet (empty shell)
//             newPages[newPages.length - 1].push({ parent: d, childOnly: true });
//             parentAdded = true;
//           }
//           // push child individually
//           newPages[newPages.length - 1].push({ childOf: d });
//           currentHeight += childHeight;
//         });
//       }
//     });

//     setPages(newPages);
//   }, [divs]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <button
//         onClick={addDiv}
//         style={{
//           marginBottom: "20px",
//           padding: "10px 20px",
//           background: "green",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         Add Div
//       </button>

//       {/* Hidden divs for measurement */}
//       <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
//         {divs.map((d, i) => (
//           <div key={i} ref={(el) => (containerRefs.current[i] = el)}>
//             <Makediv index={d} />
//           </div>
//         ))}
//       </div>

//       {/* Render Pages */}
//       {pages.map((page, pi) => (
//         <div
//           key={pi}
//           style={{
//             width: "794px",
//             height: "1123px",
//             background: "lightgrey",
//             marginBottom: "20px",
//             padding: "20px",
//             boxSizing: "border-box",
//             overflow: "hidden",
//           }}
//         >
//           <h3 style={{ textAlign: "center" }}>Page {pi + 1}</h3>
//           {page.map((item, idx) => {
//             if (typeof item === "number") {
//               // full parent
//               return <Makediv key={idx} index={item} />;
//             } else if (item.childOnly) {
//               // parent container shell (without children text)
//               return (
//                 <div
//                   key={idx}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid black",
//                     marginBottom: "10px",
//                     background: "#fff",
//                   }}
//                 >
//                   <p style={{ margin: 0, color: "red" }}>
//                     Parent Div #{item.parent} (continued)
//                   </p>
//                 </div>
//               );
//             } else if (item.childOf) {
//               // child part
//               return (
//                 <div
//                   key={idx}
//                   style={{
//                     marginTop: "5px",
//                     padding: "5px",
//                     border: "1px dashed blue",
//                     background: "#f0f8ff",
//                   }}
//                 >
//                   InnerChild Div of #{item.childOf}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import Makediv from "./Makediv";

// export default function PageA4() {
//   const PAGE_HEIGHT =400 ; // demo ke liye chhota, A4 = 1123
//   const [divs, setDivs] = useState([]); // parents
//   const [pages, setPages] = useState([[]]); // pages of items
//   const containerRefs = useRef([]);

//   // ➕ Add new parent+child
//   const addDiv = () => {
//     setDivs((prev) => [...prev, prev.length + 1]);
//   };

//   // 🔄 Pagination
//   useEffect(() => {
//     if (!divs.length) return;

//     const newPages = [[]];
//     let currentHeight = 0;

//     divs.forEach((d, i) => {
//       const el = containerRefs.current[i];
//       if (!el) return;

//       const parentEl = el.querySelector(".parent");
//       const childEl = el.querySelector(".child");

//       const parentHeight = parentEl.offsetHeight;
//       const childHeight = childEl.offsetHeight;

//       // 👉 parent check
//       if (currentHeight + parentHeight > PAGE_HEIGHT) {
//         // new page if parent doesn't fit
//         newPages.push([]);
//         currentHeight = 0;
//       }
//       newPages[newPages.length - 1].push({ type: "parent", id: d });
//       currentHeight += parentHeight;

//       // 👉 child check
//       if (currentHeight + childHeight > PAGE_HEIGHT) {
//         // new page if child doesn't fit
//         newPages.push([]);
//         currentHeight = 0;
//       }
//       newPages[newPages.length - 1].push({ type: "child", parentId: d });
//       currentHeight += childHeight;
//     });

//     setPages(newPages);
//   }, [divs]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <button
//         onClick={addDiv}
//         style={{
//           marginBottom: "20px",
//           padding: "10px 20px",
//           background: "green",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         Add Div
//       </button>

//       {/* Hidden container for measuring */}
//       <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
//         {divs.map((d, i) => (
//           <div key={i} ref={(el) => (containerRefs.current[i] = el)}>
//             <Makediv index={d} />
//           </div>
//         ))}
//       </div>

//       {/* Render paginated pages */}
//       {pages.map((page, pi) => (
//         <div
//           key={pi}
//           style={{
//             width: "500px",
//             height: PAGE_HEIGHT,
//             background: "lightgrey",
//             marginBottom: "20px",
//             padding: "10px",
//             overflow: "hidden",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3 style={{ textAlign: "center" }}>Page {pi + 1}</h3>
//           {page.map((item, idx) => {
//             if (item.type === "parent") {
//               return (
//                 <div
//                   key={idx}
//                   className="parent"
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid black",
//                     marginBottom: "5px",
//                     background: "#fff",
//                   }}
//                 >
//                   Parent Div #{item.id}
//                 </div>
//               );
//             } else if (item.type === "child") {
//               return (
//                 <div
//                   key={idx}
//                   className="child"
//                   style={{
//                     marginLeft: "20px",
//                     marginBottom: "10px",
//                     padding: "5px",
//                     border: "1px dashed blue",
//                     background: "#f0f8ff",
//                   }}
//                 >
//                   Child of Div #{item.parentId}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";
import { useState, useRef, useEffect } from "react";
import Makediv from "./Makediv";

export default function PageA4() {
  const PAGE_HEIGHT = 400; // demo ke liye chhota, A4 = 1123
  const [divs, setDivs] = useState([1, 2]); // Example: already rendered parent divs
  const [pages, setPages] = useState([[]]);
  const containerRefs = useRef([]);

  // ➕ Add new parent+child
  const addDiv = () => {
    setDivs((prev) => [...prev, prev.length + 1]);
  };

  // 🔄 Pagination (existing + new)
  useEffect(() => {
    if (!divs.length) return;

    const newPages = [[]];
    let currentHeight = 0;

    divs.forEach((d, i) => {
      const el = containerRefs.current[i];
      if (!el) return;

      const parentEl = el.querySelector(".parent");
      const childEl = el.querySelector(".child");

      const parentHeight = parentEl.offsetHeight;
      const childHeight = childEl.offsetHeight;

      // --- Parent ---
      if (currentHeight + parentHeight > PAGE_HEIGHT) {
        newPages.push([]);
        currentHeight = 0;
      }
      newPages[newPages.length - 1].push({ type: "parent", id: d });
      currentHeight += parentHeight;

      // --- Child ---
      if (currentHeight + childHeight > PAGE_HEIGHT) {
        newPages.push([]);
        currentHeight = 0;
      }
      newPages[newPages.length - 1].push({ type: "child", parentId: d });
      currentHeight += childHeight;
    });

    setPages(newPages);
  }, [divs]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Add Button */}
      <button
        onClick={addDiv}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Div
      </button>

      {/* Hidden measurement container */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        {divs.map((d, i) => (
          <div key={i} ref={(el) => (containerRefs.current[i] = el)}>
            <Makediv index={d} />
          </div>
        ))}
      </div>

      {/* Render paginated pages */}
      {pages.map((page, pi) => (
        <div
          key={pi}
          style={{
            width: "500px",
            height: PAGE_HEIGHT,
            background: "lightgrey",
            marginBottom: "20px",
            padding: "10px",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Page {pi + 1}</h3>
          {page.map((item, idx) => {
            if (item.type === "parent") {
              return (
                <div
                  key={idx}
                  className="parent"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid black",
                    marginBottom: "5px",
                    background: "#fff",
                  }}
                >
                  Parent Div #{item.id}
                </div>
              );
            } else if (item.type === "child") {
              return (
                <div
                  key={idx}
                  className="child"
                  style={{
                    marginLeft: "20px",
                    marginBottom: "10px",
                    padding: "5px",
                    border: "1px dashed blue",
                    background: "#f0f8ff",
                  }}
                >
                  Child of Div #{item.parentId}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}


// /**
//  * TypeScript is a programming language developed by Microsoft. It is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript.

// 🔍 Key Features:

// Static Typing – You can define the type of variables, function parameters, and return values.

// Compile-Time Checking – Catches errors before code runs.

// Modern JavaScript Support – Supports ES6+ features (e.g., classes, modules).

// Tooling Integration – Works well with editors like VS Code.
//  */

// let naam: string = 'Alice';
// naam = '123';

// //Topic1 => Basic types
// //string
// let firstName: string = 'John';
// //number
// let age: number = 20;
// //boolean
// let isLoggedIn: boolean = true;

// //special types
// /*
// any:
// - Allows any type of value.
// - Disables type checking. Use sparingly.
// */
// let value: any = 5;
// value = 'Five';
// value = false;

// /**
//  * unknown: Similar to any, but safer — you must check the type before using it.
//  */
// let value1: unknown = "hello";
// if(typeof value1 === 'string') {
//     console.log(value1.toUpperCase());
// }

// /**
//  * void: Used for functions that don’t return anything.
//  */
// function logMessage(message: string): void {
//     console.log(message);
// }

// /**
//  * never: Used for functions that never return, e.g., they always throw an error or run forever.
//  */
// function throwError(): never {
//     throw new Error('Something went wrong');
// }

// //Topic2 => Type annotation vs Type Inference
// /**
//  * Type Annoations: You explicitly tell TypeScript what type a variable, parameter, or return value should be.
//  */
// let userName1: string = 'Alice';
// let age1: number = 30;
// function greet(name: string): string{
//     return "Hello "+name;
// }

// /**
//  * Type Inference: TypeScript automatically infers (guesses) the type based on the assigned value.
//  * typescript already knows the type without annotation
//  */
// let city = 'Paris';
// let count = 100;

// //Topic3: Arrays and Tupels
// /**
//  * Arrays: array hold multiple values of the same types
//  */
// let fruits: string[] = ['apple', 'banana', 'cherry'];
// let numbers: number[] = [1,2,3,4,5];
// let flags: Array<boolean> = [true, false];

// /**
//  * Tuples: Tuples hold fixed-length with specific types in specific position
//  */
// let user: [string, number] = ['Alice',25];
// let userInfo: [name: string, age: number] = ['Bob',35]
// //Tuples are useful for returning multiple values from a function
// function getUser(): [string, number]{
//     return ['Jane',28]
// }

// //Topic4: Enums
// /**
//  * Enums (short for enumerations) allow you to define a set of named constants — great for readability and intent.
//  */
// enum Direction {
//     Up, Down, Left, Right
// }
// let move: Direction = Direction.Left
// console.log('move',move)
// //You can also customize the starting number:
// enum Status {
//     Success = 1,
//     Failure = 0
// }
// //string enums
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }
// let currentRole: Role = Role.Admin;

// //Topic5: Type Aliases and Interfaces: Both Type Aliases and Interfaces let you define custom types, especially useful for objects. They're often interchangeable, but there are some differences.
// /**
//  * Type Alias: Used to create custom type names for any type (primitive, union, object, etc.).
//  */
// type User = {
//     name: string;
//     age: number;
// }
// const user1: User = {
//     name: 'Alice',
//     age: 25
// }
// //You can also alias primitive or union types:
// type ID = string | number
// let userId: ID = 'abc13'

// //Interface: used to define the shape of an object
// interface Product {
//     name:string;
//     price: number;
// }
// const item: Product = {
//     name: 'google pixel 10',
//     price: 110000
// }
// // Example of interface merging:
// interface Book {
//     title: string
// }
// interface Book {
//     author: string
// }
// const myBook: Book = {
//     title: 'Manu smriti',
//     author: 'Manu'
// } 