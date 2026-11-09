import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(prev => prev+1)
  }
  return (
    <>
    <h2>Count</h2>
    <p>{count}</p>
    <button onClick={increaseCount}>Increase count</button>
    </>
  )
}