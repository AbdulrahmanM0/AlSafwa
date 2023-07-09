import { useContext } from "react"
import { dataStore } from "../../../../HandleData/ContextData"
import { useEffect , useState } from "react";
import { InView } from "react-intersection-observer";
import './OurJournyItems.css';


export default function OurJournyItems() {
    const [ windowWidth , setWindowWidth ] = useState(getWindowWidth());
    const { FactoryImages } = useContext(dataStore);
    const [ interSecting , setInterSecting ] = useState(false);

    
    function getWindowWidth(){
        return window.innerWidth;
    };
    useEffect(()=>{
        const getWidth = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize',getWidth);
        return ()=>{
            window.removeEventListener('resize',getWidth);
        }
    },[]);

  return (
    <div className="ourJournyItems-container">
        <InView onChange={(inView,entry)=>{setTimeout(()=>setInterSecting(inView),500)}} className={interSecting === true ? 'interSecting-2' : 'notInterSecting-2'} >
        <div className={`ourJourny-items ${windowWidth >= 965 ? 'd-grid' : 'd-block' }`}>
            <div>
                <img className='w-100 mb-4' src={FactoryImages[0]} alt='' />
                <p className="">Highlight the advanced technology and machinery used in the factory to emphasize the company's commitment to innovation. This could include state-of-the-art processing equipment, automated systems, or precision farming techniques.</p>
            </div>
            <div>
                <img className="w-100 mb-4" src={FactoryImages[1]} alt='' />
                <p className=''>Emphasize the company's dedication to sustainable agriculture by showcasing eco-friendly initiatives implemented in the factory. You can mention renewable energy sources, water conservation methods, or waste management systems that promote environmental responsibility.</p>
            </div>
            <div>
                <img className='w-100 mb-4' src={FactoryImages[2]} alt='' />
                <p className=''> Discuss the rigorous quality control measures implemented in the factory to ensure the production of high-quality agricultural products. This could involve mentioning quality testing labs, adherence to strict standards, or certifications obtained by the company.</p>
            </div>
        </div>
        </InView>

    </div>
  )
}
