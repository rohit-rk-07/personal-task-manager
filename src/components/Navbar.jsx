import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
        <Link className='nav-link' to="/"> Home </Link>
        <Link className='nav-link' to="/completed">Completed</Link>
    </nav>
  )
}
