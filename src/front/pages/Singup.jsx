import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/userServices.js"
import Swal from "sweetalert2"


export const Singup = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const [passwordEye, setPasswordEye] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault()
    const userCreated = await createUser(formData)

    if (userCreated.msg) {
      Swal.fire({
        title: "Error",
        text: userCreated.msg,
        icon: "error"
      })
    } else {
      Swal.fire({
        title: "User created",
        text: `${formData.email} account has been created`,
        icon: "success"
      }).then((resp) => {
        if (resp.isConfirmed){
          navigate("/")
        }
      })
    }
  }


  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData((gigante) => {
      return { ...gigante, [name]: value }
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
          <button type="button" className="mt-1" onClick={() => setPasswordEye(prev => !prev)}><i className="fa-regular fa-eye"></i></button>
        </div>
        <button type="submit" className="btn btn-warning mb-2">Signup</button>
        <p>You have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  )
}