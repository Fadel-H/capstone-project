import React from 'react'
import {Link} from "react-router-dom"

function Login({onChange, onLoginSubmit}) {
    return (
      <>
        { <form id="form" onSubmit={onLoginSubmit}>
        <div className="container py-5 h-100">
        <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
        <div className="card-body p-5 text-center">
         <div className="form-outline form-white mb-4">
          <input type="username" name="username" onChange={onChange} className="form-control form-control-lg" placeholder="username" required />
          <label className="form-label">Username</label>
         </div>
         <div className="form-outline form-white mb-4">
          <input type="password" name="password"  onChange={onChange} className="form-control form-control-lg" placeholder="password" required />
          <label className="form-label">Password</label>
         </div>
         <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">login</button>
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