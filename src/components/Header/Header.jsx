import './Header.css';
import headerCover from '../../assets/covers/header-shape.png';
import NavBar from './HeaderComponents/NavBar';
import Logo from './HeaderComponents/Logo';
import { useEffect, useState , useContext } from 'react';
import ResponsiveNav from './HeaderComponents/ResponsiveNav';
import MenueIcon from './HeaderComponents/MenueIcon';
import { dataStore } from '../HandleData/ContextData';


export default function Header() {
    const [windowWidth,setWindowWidth] = useState(getWindowWidth());
    const {setNavToggle} = useContext(dataStore);

    function getWindowWidth(){
        return window.innerWidth;
    };
    useEffect(() => {
        const updateWindowWidth = () => {
            if(window.innerWidth > 965){
                setNavToggle(false)
            }
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowWidth);
        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
      }, []);

  return (
    <header className='header'>
        <div className='imgWave'>
            <img className='waveContainer' src={headerCover} alt='wave' />
        </div>
        <div className='container d-flex justify-content-between align-items-center p-4'>
            <Logo />
            {windowWidth >= 965 ? <NavBar /> : <MenueIcon /> }
            <ResponsiveNav />
            
        </div>
    </header>
  )
}
