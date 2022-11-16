import {Link} from 'react-router-dom'
import useState from 'react'

const NavBar = () => {
    return (
      <div className="container">
        <div className="navBarItems">
        <p><Link to="/">Play Troll Adventure</Link> </p>
        </div>
        <div className="navBarItems">
        <p><Link to="/about">Sign Troll GuestBook</Link> </p>
        </div>
        <div className="navBarItems">
        <p><Link to="/GuestBook">Visit Guest Book</Link> </p>
        </div>
      </div>
    )
}

export default NavBar