import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>LOGO</nav>
                <menu>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}