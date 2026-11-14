import { useState } from "react"

export default function TodoList(){
  const [todos, setTodo] = useState([
    {id:1, text: "Learn React"},
    {id:2, text: "Practice Javascript"},
    {id:3, text: "Build a project"}
  ])
  // Store what the users type.
  const [input, setInput] = useState("")
  
  function addTask() {
    setTodo((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: "Learn React Hooks."
      }
    ]);
  }

  function handleChange(event){
    setInput(event.target.value)
  }

  return(
    <>
     <h2>My todo list.</h2>

     <input type="text" onChange={handleChange} value={input}/>
      <button onClick={addTask}>Add task</button>

      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text}
        </p>
      ))}
    </>
  )
}