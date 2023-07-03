import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
        <ul className='nav-list d-flex'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact-Us</Link></li>
        </ul>
    </nav>
  )
}
