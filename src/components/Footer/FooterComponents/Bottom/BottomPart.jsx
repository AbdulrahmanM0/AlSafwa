import './BottomPart.css';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function BottomPart() {
  return (
    <div className='footerBottom'> 
        <div className='container d-flex justify-content-between'>
            {new Date().getFullYear()} Al Safwa Chemicals. All rights reserved.
            <div className='facebookIcon'>
                <a href='https://www.facebook.com/profile.php?id=100057070436233' ><FacebookIcon /></a>
            </div>
        </div>
    </div>
  )
}
