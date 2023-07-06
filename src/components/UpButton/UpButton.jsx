import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import './UpButton.css';
import { useState } from 'react';

export default function UpButton() {
    const [windowY,setWindowY] = useState(0);
    function handleTop(){
        window.scrollTo(0,0)
    };
    window.onscroll = function(){
        setWindowY(window.scrollY)
    };
  return (
    <>
    {windowY >= 600 &&
    <div className='upArrow'onClick={()=>{handleTop()}} >
            <ArrowCircleLeftSharpIcon />
    </div>
    }
    </>
  )
}
