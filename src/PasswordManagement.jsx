import { useState } from "react";

export default function PasswordField(){
  const [showPassword, setShowPassword] = useState(true)

  return(
    <>
    <input type= {showPassword ? "text" : "password"} placeholder="enter password"/>
    <button onClick={()=>setShowPassword((prev) => !prev)}>{showPassword?"Hide password":"Show password"}</button>
    </>
  )
}