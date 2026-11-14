import { useState } from "react";

// Initial value of the input fields
export default function Forms(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  })

  // Tracking changes on the input fields
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return(
    // Interface

    <form>
      <input type="text" name = "name" placeholder="Full name" value={formData.name} onChange={handleChange}/>
      <input type="email" name = "email" placeholder="Email address" value={formData.email} onChange={handleChange}/>
      <input type="text" name="course" placeholder="Course name" value={formData.course} onChange={handleChange}/>
      <h3>Form preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Course: {formData.course}</p>
    </form>
  )
}