import {Link} from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    return (
        <ul>
            <li ><Link to="/">Play Troll Adventure Game</Link> </li>
            <li><Link to="/about">Sign the Troll GuestBook</Link> </li>
            <li><Link to="/GuestBook">Troll Guest Book</Link> </li>
        </ul>
    )
}

export default NavBar