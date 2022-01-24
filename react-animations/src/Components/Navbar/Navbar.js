import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                LIST
            </Link>
            <Link to="/stateAnim">
                INPUT
            </Link>
            <Link to="/scroll">
                SCROLL
            </Link>
        </nav>
    )
}
