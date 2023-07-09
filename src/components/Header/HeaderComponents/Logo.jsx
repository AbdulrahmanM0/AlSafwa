import LogoImg from '../../../assets/images/LOGO/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
        <Link to='/'>
            <img className='logoImg' src={LogoImg} alt='logo' />
        </Link>
    </div>
  )
}
