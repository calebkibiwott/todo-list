import { useState } from "react";

export default function Admissons(){
  const[student, setStudent] = useState({
    name: "Caleb.",
    age: 25,
    course: "Software Engineering."
  })

  function changeAge(){
    setStudent((prevStudent)=>({
      ...prevStudent,
      age: prevStudent.age+1
    }))
  }
  return(
    <>
    <h2>Student Profile.</h2>
    <p>{student.name}</p>
    <button onClick={()=>setStudent((prevStudent)=>({...prevStudent, name:"Dennis"}))}>Change name</button>
    <p>{student.age}</p>
    <button onClick={changeAge}>Change Age.</button>
    <p>{student.course}</p>
    <button onClick={()=>{setStudent((student)=>({...student, course:"Information Technology."}))}}>Change course.</button>
    </>
  )
}