import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Registration({status,setStatus}) {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleOnSubmit(e){
    e.preventDefault()
    fetch("/sign-up",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(register)
    }
    ).then(resp => {resp.json()
    setStatus(resp.status)
  }
    )
    .catch(errors => console.log(errors))
  }

  useEffect(() => {
    if (status === 200){
      navigate("/login")
      setStatus("")
    }
  }, [status, navigate, setStatus])



  function onChange(e){
    if (e.target.name=== "username"){
      setRegister({...register, username: e.target.value})
    } else if (e.target.name=== "email") {
      setRegister({...register, email: e.target.value})
    } else {
      setRegister({...register, password: e.target.value})
    }
  }
  return (
    <section className="vh-100">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card bg-dark text-white" style={{borderRadius: "15px"}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  
                <form onSubmit={handleOnSubmit}>
                  <div className="form-outline mb-4">
                    <input name="username" type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={onChange} placeholder="username" />
                    <label className="form-label" >Username</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={onChange} placeholder="email" />
                    <label className="form-label">Email</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={onChange} placeholder="password"/>
                    <label className="form-label">Password</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Registration