import {Link} from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    return (
      <div>
        <p><Link to="/">Play Troll Adventure Game</Link> </p>
        <p><Link to="/about">Sign the Troll GuestBook</Link> </p>
        <p><Link to="/GuestBook">Troll Guest Book</Link> </p>
      </div>
    )
}

export default NavBar