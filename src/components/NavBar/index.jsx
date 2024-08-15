import {Link} from "react-router-dom"
import "./index.css"

const NavBar = () => {
    return(
        <nav className="nav-container">
            <div className="logo">
                <h1 className="nav-logo">MU</h1>
                <span className="nav-logo-span">Mumair</span>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonals</li>
                <li>Contact</li>
                <li><button>Download CV</button></li>
            </ul>
        </nav>
    )
}

export default NavBar