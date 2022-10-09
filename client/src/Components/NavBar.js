import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {

  return (
    <div>
        <nav>
        <Link to="login">Login</Link>
        <Link to="manga">Manga</Link>
        <Link to="anime">Anime</Link>
    </nav>
    </div>
  )
}

export default NavBar