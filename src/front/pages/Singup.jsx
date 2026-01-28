import { useState } from "react"
import { Link } from "react-router-dom"

export const Singup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordEye, setPasswordEye] = useState(false)



  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <div>
      <form className="w-50 mx-auto text-center mt-5" onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} type={`${passwordEye ? "text" : "password"}`} required></input>



      </form>      
    </div>
  );
}