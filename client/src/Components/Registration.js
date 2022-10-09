import React, {useState} from 'react'


function Registration() {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  })

  function onChange(e){
    if (e.target.name=== "username"){
      setRegister({...register, username: e.target.value})
    } else if (e.target.name=== "email") {
      setRegister({...register, email: e.target.value})
    } else {
      setLogin({...login, password: e.target.value})
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
  
                <form>
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={onChange} />
                    <label className="form-label" for="form3Example1cg">Your Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={onChange} />
                    <label className="form-label" for="form3Example3cg">Your Email</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={onChange} />
                    <label className="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>
  
                  {/* <p className="text-center text-muted mt-5 mb-0">Already have an account?<Link to="Registration" className="fw-bold text-primary"><u>register here</u></Link></p> */}
  
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