import './PopUp.css';
import { useContext } from 'react';
import { dataStore } from '../HandleData/ContextData'; 

export default function PopUp() {
    const {popUpToggle,setPopUpToggle,popUpImg} = useContext(dataStore);

  return (
    <>
    {popUpToggle === false && 
    <section>
        <div className='popUp-section' onClick={()=>{setPopUpToggle(true)}}>
            <img className='popUpImg' src={popUpImg} alt='pop Up Img' />
        </div>
    </section>
    }
    </>
  )
}
