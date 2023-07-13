import './TopPart.css';
import logoImg from '../../../../assets/images/LOGO/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CoverImageSection from '../../../../assets/covers/supplement_shape02.png';

import { useContext } from 'react';
import { dataStore } from '../../../HandleData/ContextData';
import { Link } from 'react-router-dom';


export default function TopPart() {
    const { FactoryImages , setPopUpToggle , setPopUpImg } = useContext(dataStore);
    function handlePopUpImg(ImgSrc){
        setPopUpToggle(false);
        setPopUpImg(ImgSrc);
    }

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
                    <div className='footerGallery'>
                        {FactoryImages.map(Factoryimg=>
                        <img key={Factoryimg} onClick={()=>{handlePopUpImg(Factoryimg)}} className = 'm-1 border border-success' src={Factoryimg} alt='galleryImg' />
                        )}
                        </div>
                </div>
            </div>
        </div>
        <div className="coverSectionImg">
            <img  src={CoverImageSection} alt='cover image' />
        </div>
    </div>
  )
}
