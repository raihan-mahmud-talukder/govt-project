import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>LOGO</nav>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <menu>
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
                        <li><NavLink to='/services' className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
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