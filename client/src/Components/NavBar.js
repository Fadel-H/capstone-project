import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar({loginStatus}) {

 return (
    <div style={{
      display: "flex",
      background: 'black',
      padding: '5px 0 5px 5px',
      fontSize: '20px',
  }}>
     <div style={{ margin: '10px' }}>
        {loginStatus ?  <NavLink to="logout" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })}>logout</NavLink>
        :
        <NavLink to="login" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })}>Login</NavLink>}
      </div>
      <div style={{ margin: '10px' }}>
        <NavLink to="manga" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })}>Manga</NavLink>
      </div>
      <div style={{ margin: '10px' }}>
        <NavLink to="anime" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })}>Anime</NavLink>
      </div>
      { loginStatus ?
        <div style={{ margin: '10px' }}>
        <NavLink to="profile" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })}>Profile</NavLink>
      </div>
      : null
      }
    </div>
  )
}

export default NavBar