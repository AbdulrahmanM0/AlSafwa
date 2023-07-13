import './MainSection.css';
import PagesHead from '../../PagesHead/PagesHead';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export default function MainSection() {
  return (
    <section>
        <PagesHead pageHead={'Contact Us'}/>
        <div className='container'>
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
            </div>
    </section>
  )
}
