import { useState } from "react"
import { Link } from "react-router-dom"

export const Singup = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [passwordEye, setPasswordEye] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()

  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData((gigante)=>{
      return{...gigante, [name] : value}
    })
  }

  return (

    <div className="w-50 mx-auto text-center mt-5">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input onChange={handleChange} name="email" value={formData.email} type="text" className="form-control" id="exampleFormControlInput1"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input onChange={handleChange} name="password" value={formData.password} type={`${passwordEye ? "text" : "password"}`} className="form-control" id="exampleFormControlTextarea1"></input>
          <button className="mt-1" onClick={() => setPasswordEye(prev => !prev)}><i className="fa-regular fa-eye"></i></button>
        </div>
        <button type="submit" className="btn btn-warning mb-2">Signup</button>
        <p>You have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  )
}