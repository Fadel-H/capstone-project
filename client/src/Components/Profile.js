import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
 const navigate = useNavigate()
const [userData, setUserData] = useState({
   username: "",
   password: "",
   email: ""
})
    useEffect(() => {
        fetch("/me")
        .then(resp => resp.json())
        .then(data => setUserData({username: data.username, email: data.email}))
    }, [])
   
    function handleOnChange(e){
        if (e.target.name=== "username"){
            setUserData({...userData, username: e.target.value})
        } else if (e.target.name=== "email") {
            setUserData({...userData, email: e.target.value})
        } else {
            setUserData({...userData, password: e.target.value})
        }
      }
    function handleOnSubmit(e){
        e.preventDefault()
        fetch("/update", {
            method: "put",
            headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify(userData)
        })
    }

    function handleDeleteAccount(e){
        e.preventDefault()
        fetch("/delete", {
            method: "delete"
        })  
        navigate("/")
        window.location.reload()
    }

  return (
    <>
    <form  onSubmit={handleOnSubmit}>
    <div className="form-outline mb-4">
        <h1 className= "text-center">Username Info </h1>
        <h3 className="form-label" >change user</h3>
      <input name="username" type="text" className=" form-control-lg" placeholder= "new username" onChange={handleOnChange}/>
      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Submit</button>
    </div>
    <div className="form-outline mb-4">
    <h3 className="form-label" >change email</h3>
      <input name="email" type="email"  className=" form-control-lg" placeholder="new email" onChange={handleOnChange}/>
      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Submit</button>
    </div>
    <div className="form-outline mb-4">
    <h3 className="form-label" >change password</h3>
      <input name="password" type="password" className=" form-control-lg" placeholder="new password" onChange={handleOnChange}/>
      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
    </div>
   
  </form>
  <form onSubmit={handleDeleteAccount}>
   <h3 className="form-label text-center" >Delete account</h3>
   <div className="d-flex justify-content-center">
     <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-center" >Submit</button>
   </div>
   </form>
   </>
  )
}

export default Profile