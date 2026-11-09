import { useState } from "react";

export default function Boolean () {

  const [isActive, setIsActive] = useState(true);

  function toggleActive(){
    setIsActive(prevState => !prevState)
  }

  return (
    <>
    <h2>{isActive ? "Active" : "Inactive"}</h2>
    <button onClick={toggleActive}>Toggle Status</button>
    </>
  )
}