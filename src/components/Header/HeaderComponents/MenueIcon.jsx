import ResponsiveNav from './ResponsiveNav';
import MenuIcon from '@mui/icons-material/Menu';
import SegmentIcon from '@mui/icons-material/Segment';
import { useContext } from 'react';
import { dataStore } from '../../HandleData/ContextData';

export default function MenueIcon() {
    const {navToggle,setNavToggle} = useContext(dataStore);

    function handleToggle(){
       setNavToggle(!navToggle)
    };
  return (
    <div className='navIconContainer'>
        {navToggle === false ?
        <MenuIcon onClick={()=>handleToggle()} className='nav-icon'/> :
        <SegmentIcon onClick={()=>handleToggle()} className='nav-icon icon-open'/>
        }
        
    </div>
  )
}
