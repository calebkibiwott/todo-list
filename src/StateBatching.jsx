import { useState } from "react";

function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);
  const [isActive, setIsActive] = useState(false);

  function updateUser() {
    setName("Peter");
    setAge(25);
    setIsActive(true);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Active: {String(isActive)}</p>

      <button onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}

export default App;