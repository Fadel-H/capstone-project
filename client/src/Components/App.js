import React, {useState, useEffect}from 'react'
import {Route, Routes} from "react-router-dom"
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import NavBar from './NavBar';
import Anime from "./Anime";
import Manga from "./Manga";
import Registration from "./Registration";
import Logout from './Logout';
import Profile from './Profile';

function App() {
const [status, setStatus] = useState("")
const [loginStatus, setLoginStatus] = useState(false)

useEffect(() => {
  fetch("/me")
  .then(resp => resp.json())
  .then(data => {
    if (data.status === 404){
      return
    } else {
      setLoginStatus(true)
    }
  })
},[setLoginStatus])

  return (
    <div className="App bg-secondary"
    style= {{
  minHeight : '100vh'
    }}
    >
      <NavBar loginStatus={loginStatus}/>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login status={status} setStatus={setStatus} setLoginStatus={setLoginStatus}/>} />
        <Route path="logout" element={<Logout setLoginStatus={setLoginStatus}/>} />
       <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/login/Registration" element={<Registration status={status} setStatus={setStatus}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
