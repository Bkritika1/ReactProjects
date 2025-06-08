// import useForm from "./useform"
// // import useLocalStorage from "./uselocalstorage"


// export default function Form(){

//     const [value, handleChange] = useForm({''})
//     // const [] =useLocalStorage('formTEXT', '')
//     return(
//       <form>
//          <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       </form>
//     )
// }

// Form.jsx
import useForm from "./useform";
import useLocalStorage from "./uselocalstorage";

export default function Form() {
  const { value, handleChange } = useForm(''); // ✅ correct destructuring
 const[text , setText] = useLocalStorage('myText3' , '')
 

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </form>
  );
}
