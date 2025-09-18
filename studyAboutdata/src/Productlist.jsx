// import productList from "./data1"

// export default function Productlist(){
//     return(
//         <>
//             <div style={{display:'flex', gap:'3rem',alignItems:'center', justifyContent:'center',width:'950px',flexWrap:'wrap'}}>
//                 {productList.map((product, index)=>{
//                    return(
//                    <div key={index} style={{border:'1px solid', borderRadius:'10px', padding:'10px',width:'100px',height:'100px',listStyle:'none' }}>
//                       <li>{product.name}</li>
//                       <li>{product.price}</li>
//                       <li>{product.company}</li>
//                    </div>
//                    )
//                 })}
//             </div>
//         </>
//     )
// }



import { categories } from "./data1"
import productList  from "./data1"

export default function Productlist() {
    return (
        <>
            <div className="dropdown">
                <label htmlFor="categoryDropdown">Choose Category</label>
                <select name="categoryDropdown" id="categoryDropdown">
                    {categories.map((category,index)=>{
                         return <option key={index}>{category.Name}</option>
                    })}
                  
                </select>
            </div>

            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', width: '950px', flexWrap: 'wrap' }}>
                {productList.map((product, index) => {
                    return (
                        <div key={index} style={{ border: '1px solid', borderRadius: '10px', padding: '10px', width: '200px', height: '150px', listStyle: 'none' }}>
                            {Object.entries(product).map(([key, value], index) => {
                                return <li key={index}><strong>{key}:</strong>{value}</li>
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
