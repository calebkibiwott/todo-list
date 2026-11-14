import { useState } from "react";

export default function Controlled(){
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.name)
  }

  return(
    <>
    <label>Student Name.</label>
    <input type="text" value = {name} onChange={handleChange}/>
    <p>Your name is: {name}</p>
    </>
  )
}