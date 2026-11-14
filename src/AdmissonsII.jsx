import { useState } from "react";

export default function Admissons(){
  const[student, setStudent] = useState({
    name: "Caleb.",
    age: 25,
    course: "Software Engineering."
  })

  const changeAge = () => {
    setStudent((prevStudent)=>({
      ...prevStudent,
      age: prevStudent.age+1
    }))
  }

  const greetStudent = (name) => {
    alert(`Welcome ${name}`)
  }
  return(
    <>
    <h2>Student Profile.</h2>
    <p>Click this button to proceed.<button onClick={()=>{greetStudent("Caleb.")}}>Welcome.</button></p>
    <p>{student.name}</p>
    <button onClick={()=>setStudent((prevStudent)=>({...prevStudent, name:"Dennis"}))}>Change name</button>
    <p>{student.age}</p>
    <button onClick={changeAge}>Change Age.</button>
    <p>{student.course}</p>
    <button onClick={()=>{setStudent((student)=>({...student, course:"Information Technology."}))}}>Change course.</button>
    </>
  )
}