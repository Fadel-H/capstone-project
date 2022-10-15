import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"

function Login({status, setStatus, setLoginStatus}) {
const [login, setLogin] = useState({
  username: "",
  password: ""
})
const navigate = useNavigate()

useEffect(() => {
  if (status === 201){
    navigate("/anime")
    setStatus("")
    setLoginStatus(true)
  }
}, [status, navigate, setStatus, setLoginStatus])

  function handleOnSubmit(e){
    e.preventDefault()
    fetch("/login",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(login)
    }
    ).then(resp => {resp.json()
    setStatus(resp.status)      
  }
    )
    .catch(errors => console.log(errors))
  }

  function handleOnChange(e){
    if (e.target.name=== "username"){
      setLogin({...login, username: e.target.value})
    } 
     else {
      setLogin({...login, password: e.target.value})
    }
  }


    return (
      <>
        { <form id="form" onSubmit={handleOnSubmit}>
        <div className="container py-5 h-100">
        <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
        <div className="card-body p-5 text-center">
         <div className="form-outline form-white mb-4">
          <input type="username" name="username" onChange={handleOnChange} className="form-control form-control-lg" placeholder="username" required />
          <label className="form-label">Username</label>
         </div>
         <div className="form-outline form-white mb-4">
          <input type="password" name="password"  onChange={handleOnChange} className="form-control form-control-lg" placeholder="password" required />
          <label className="form-label">Password</label>
         </div>
         <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">login</button>
        </div>
        <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="Registration" className="fw-bold text-primary"><u>register here</u></Link></p>
        </div>
        </div>
        </div>
        </div>
        </form>}
      </>
    )
  }

export default Login