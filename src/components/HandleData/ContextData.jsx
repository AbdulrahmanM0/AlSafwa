import { Provider, createContext , useState } from "react";
import { CatalogueImages } from './DataItems/CatalogueImages';
import { FactoryImages } from './DataItems/FactoryImages';

export const dataStore = createContext(); 


export default function ContextData(props) {
    const [navToggle,setNavToggle] = useState(false);
  return (
    <dataStore.Provider value={{navToggle,setNavToggle,CatalogueImages,FactoryImages}}>
        {props.children}
    </dataStore.Provider>
  )
}
