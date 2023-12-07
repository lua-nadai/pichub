import { NavLink } from 'react-router-dom'
import './index.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='brand'>
        Pic <span>Hub</span>
      </NavLink>
      <ul className='links_list'>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink to='/register'>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar