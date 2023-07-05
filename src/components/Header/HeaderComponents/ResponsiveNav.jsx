import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataStore } from "../../HandleData/ContextData";


export default function ResponsiveNav() {
    const {navToggle , setNavToggle} = useContext(dataStore);

    function handleToggle(){
        setNavToggle(!navToggle)
    }

  return (
    <>
    {navToggle === true && 
    <>  
    <div className="banalNav" onClick={()=>{handleToggle()}}></div>
    <div className="responsiveNav">
        <ul>
            <li><Link to='/' onClick={()=>{handleToggle()}}>Home</Link></li>
            <li><Link to='about' onClick={()=>{handleToggle()}}>About</Link></li>
            <li><Link to='contact' onClick={()=>{handleToggle()}}>Contact-Us</Link></li>
        </ul>
    </div>
    </>
    }
    </>
  )
}
