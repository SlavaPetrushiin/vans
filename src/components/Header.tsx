import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink/CustomLink'

const Header = () => {
    return (
        <header className="header">
            <Link to="." className="logo">#VANLIFE</Link>
            <nav className="nav">
                <CustomLink to=".">Home</CustomLink>
                <CustomLink to="host">Host</CustomLink>
                <CustomLink to="vans">Vans</CustomLink>
                <CustomLink to="about">About</CustomLink>
                <CustomLink to="login">Login</CustomLink>
            </nav>
        </header>
    )
}

export default Header
