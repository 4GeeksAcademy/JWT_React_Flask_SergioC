import { Link } from "react-router-dom"

export const Singup = () => {



  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlTextarea1" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Login</button>
        <p>You don't have an account? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  );
}