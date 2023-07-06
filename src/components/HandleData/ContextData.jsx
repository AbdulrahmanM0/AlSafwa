import { Provider, createContext , useState } from "react";
import { CatalogueImages } from './CatalogueImages';

export const dataStore = createContext(); 


export default function ContextData(props) {
    const [navToggle,setNavToggle] = useState(false);
  return (
    <dataStore.Provider value={{navToggle,setNavToggle,CatalogueImages}}>
        {props.children}
    </dataStore.Provider>
  )
}
