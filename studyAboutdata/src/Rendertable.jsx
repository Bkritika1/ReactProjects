import studentDetails from '../src/data'

export default function Rendertable(){
    return(
        <>
        <table>
           <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Math Score</th>
            </tr>
           </thead>
           <tbody>
            {studentDetails.map((student,index)=>{
               return(
                 <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.mathScore}</td>
                </tr>
               )
            })}
           </tbody>
        </table>
        </>
    )
}