import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"


function Logout({setLoginStatus}) {
  const navigate = useNavigate()

  useEffect(() =>{
    fetch("/logout", {method: "delete"})
    navigate("/")
    setLoginStatus(false)
  })
  return (
    <div></div>
  )
}

export default Logout