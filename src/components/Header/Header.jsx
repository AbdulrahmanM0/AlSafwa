import './Header.css';
import headerCover from '../../assets/covers/header-shape.png';
import NavBar from './HeaderComponents/NavBar';
import Logo from './HeaderComponents/Logo';
import { useEffect, useState , useContext } from 'react';
import ResponsiveNav from './HeaderComponents/ResponsiveNav';
import MenueIcon from './HeaderComponents/MenueIcon';
import { dataStore } from '../HandleData/ContextData';


export default function Header() {
    const [ windowWidth , setWindowWidth ] = useState(getWindowWidth());
    const [ windowScroll , setWindowScroll ] = useState(0);
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

      useEffect(()=>{
        window.onscroll = () => {
          setWindowScroll(window.scrollY);
        }  
      },[])
      
      function handleWaveImg(){
        return (
          <div className='imgWave'>
            <img className='waveContainer' src={headerCover} alt='wave' />
          </div>
        )
      }

  return (
    <header className={`header ${windowScroll >= 600 ? 'headerPositionFixed' : '' }`}>
      {windowScroll <= 10 && handleWaveImg()}
        <div className='container d-flex justify-content-between align-items-center p-4 '>
            <Logo />
            {windowWidth >= 965 ? <NavBar /> : <MenueIcon /> }
            <ResponsiveNav />
            
        </div>
    </header>
  )
}
