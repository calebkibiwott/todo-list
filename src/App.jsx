import Boolean from "./Boolean"
import Counter from "./Counter"
import StateBatching from "./StateBatching"
import PasswordField from "./PasswordManagement"
import StudentProfile from "./Admissons"
import Admissons from "./AdmissonsII"
import TodoList from "./TodoList"
import Controlled from "./ControlledComponents"
import Forms from "./FormFields"

function App () {
  return (
    <>
    <Counter/>
    <Boolean/>
    <StateBatching/>
    <br />
    <PasswordField/>
    <br />
    <StudentProfile/>
    <br />
    <Admissons/>
    <br />
    <TodoList/>
    <br />
    <Controlled/>
    <br />
    <Forms/>
    </>
  )
}

export default App;