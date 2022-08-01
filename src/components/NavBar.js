import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Play Troll Adventure Game</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/safetytips">Troll Safety Tips</Link> </li>
        </ul>
    )
}

export default NavBar