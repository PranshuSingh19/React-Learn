import { useState } from "react";

function Result() {

    const students = [
        { id: 1, name: "Amit", marks: 82, subject: "Math" },
        { id: 2, name: "Sita", marks: 45, subject: "English" },
        { id: 3, name: "Rahul", marks: 38, subject: "Science" },
        { id: 4, name: "Priya", marks: 90, subject: "Math" },
        { id: 5, name: "John", marks: 55, subject: "Science" },
        { id: 6, name: "Kavita", marks: 30, subject: "English" },
        { id: 7, name: "Ali", marks: 15, subject: "Math" },
        { id: 8, name: "Nina", marks: 72, subject: "Science" },
        { id: 9, name: "Ravi", marks: 40, subject: "English" },
        { id: 10, name: "Fatima", marks: 28, subject: "Math" }
      ];
      
    const [PassStudent, FailStudetn] = useState(false);

    // apply filter 
    {/* Ternary optrater use 
        {hidden ? 'show' : 'hide' } */}

    const StudentData = students.filter( (student)=>{
        return PassStudent ?  student.marks >= 30 :  student.marks < 30;
    });

    return(
        <>
        <h1> Students Result Data </h1>

       
        <button onClick={ ()=> FailStudetn(!PassStudent) }
        className="px-4 py-2 border rounded mb-4 cursor-pointer" > 
        {PassStudent ? 'Pass Student' : 'Fail Student'}     
        

       </button>
    
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {StudentData.map( (students, index)=>
        
        PassStudent ? (
            <>
            <div key={index} className="bg-white p-4 rounded shadow">
            <b>Pass Student Name</b>
            <h2>   {students.name} </h2>
            <h3> {students.subject} </h3>
            <p>   {students.marks} </p>
            </div>
            </>
        ) : 
        (
            <>
            <div key={index} className="bg-white p-4 rounded shadow">
            <b>Fail Student Name</b>
            <h2>   {students.name} </h2>
            <h3> {students.subject} </h3>
            <p>   {students.marks} </p>
          </div>
          </>
        )
    
        )}
        </div>
        
        </>
    )
}
export default Result;