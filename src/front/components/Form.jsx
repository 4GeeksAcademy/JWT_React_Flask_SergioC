import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export const Form = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { store, dispatch } = useGlobalReducer()

  function sendData(e) {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "email": email,
          "password": password
        }
      )
    };
    fetch(import.meta.env.VITE_BACKEND_URL + '/api/login', requestOptions)
      .then(response => {
        if (response.status == 200) {
          dispatch({
            type: "set_auth",
            payload: true
          })
        }
        return response.json().then(data => {
          if (data.access_token) {
            localStorage.setItem("token", data.access_token)
            Swal.fire({
              title: "Welcome",
              text: "Enjoy our app",
              icon: "success"
            }).then(()=>{
              navigate("/private")
            })
          } else if (data.msg) {
            Swal.fire({
              title: "Error",
              text: data.msg,
              icon: "error"
            });
          }
        })
      })
  }


  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlTextarea1" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Login</button>
      </form>
      <p>You don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}