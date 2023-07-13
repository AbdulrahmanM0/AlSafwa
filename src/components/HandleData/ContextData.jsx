import { Provider, createContext , useState } from "react";
import { CatalogueImages } from './DataItems/CatalogueImages';
import { FactoryImages } from './DataItems/FactoryImages';

export const dataStore = createContext(); 


export default function ContextData(props) {
    const [navToggle,setNavToggle] = useState(false);
    const [popUpToggle,setPopUpToggle] = useState(true);
    const [popUpImg,setPopUpImg] = useState('');
  return (
    <dataStore.Provider value={{navToggle,setNavToggle,CatalogueImages,FactoryImages,popUpToggle,setPopUpToggle,popUpImg,setPopUpImg}}>
        {props.children}
    </dataStore.Provider>
  )
}
