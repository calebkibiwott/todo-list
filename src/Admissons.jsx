import { useState } from "react";

export default function StudentProfile(){

  const [name, setName] = useState("Caleb")
  const [age, setAge] = useState(25)
  const [isRegistered, setIsregistered] = useState(true)

  function handleAge(){
    setAge(26)
  }

  return(
    <>
    <h1>Student Profile.</h1>
    <h3>Name: {name}</h3>
    <button onClick={() => {setName("Dennis")}}>Change Name</button>
    <h3>Age: {age}</h3>
    <button onClick={handleAge}>Change Age</button>
    <h3>Registration: {isRegistered ? "Registered" : "Not Registered"}</h3>
    <button onClick={() => {setIsregistered(prev => !prev)}}>Change Registration Status</button>

    </>
  )
}