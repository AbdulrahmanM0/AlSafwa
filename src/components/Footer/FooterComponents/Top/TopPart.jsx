import './TopPart.css';
import logoImg from '../../../../assets/images/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';
import galleryImg1 from '../../../../assets/images/logo2.jpg';
import galleryImg2 from '../../../../assets/images/logo3.jpg';
import galleryImg3 from '../../../../assets/images/logo4.jpg';
import galleryImg4 from '../../../../assets/images/logo5.jpg';

export default function TopPart() {
  return (
    <div className="footerTop">
        <div className="container footerTop-container">
            <div className='m-3'>
                <Link to='/' className='text-center' style={{color:'#fff'}} >
                    <div className='mb-3 text-center' >
                        <img src={logoImg} style={{width: '70px'}} alt='logo' />
                    </div>
                    <div>
                        <h4 >Al Safwa <br/> Chemicals</h4>
                    </div>
                </Link>
            </div>
            <div className='contact-info m-3'>
                <h5>CONTACT INFO</h5>
                <ul>
                    <li>
                        <PhoneIcon />
                        <p>047 2515394</p>
                    </li>
                    <li>
                        <EmailIcon />
                        <p>info@safwachemicals.com</p>
                    </li>
                    <li>
                        <HomeIcon />
                        <p>Kafr el Sheikh, Egypt</p>
                    </li>


                </ul>
            </div>
            <div className='m-3' >
                <div className='gallery-container d-inline-block' >
                    <div className=''>
                        <img className='m-1 border border-success' src={galleryImg1} alt='galleryImg' />
                        <img className='m-1 border border-success' src={galleryImg2} alt='galleryImg' />
                        <div className='w-100 '></div>
                        <img className='m-1 border border-success' src={galleryImg3} alt='galleryImg' />
                        <img className='m-1 border border-success' src={galleryImg4} alt='galleryImg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
