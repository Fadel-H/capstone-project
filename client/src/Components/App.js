import React, {useState}from 'react'
import {Route, Routes} from "react-router-dom"
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import NavBar from './NavBar';
import Anime from "./Anime";
import Manga from "./Manga";
import Registration from "./Registration";

function App() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

function onChange(e){
    if (e.target.name=== "username"){
      setLogin({...login, username: e.target.value})
    } else {
      setLogin({...login, password: e.target.value})
    }
  }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login onChange={onChange} />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/login/Registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
