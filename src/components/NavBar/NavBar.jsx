import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
        <ul>
            <Link to="/country-list"><li>Characters List</li></Link>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar