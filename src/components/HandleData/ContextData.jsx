import { Provider, createContext , useState } from "react";

export const dataStore = createContext(); 


export default function ContextData(props) {
    const [navToggle,setNavToggle] = useState(false);
  return (
    <dataStore.Provider value={{navToggle,setNavToggle}}>
        {props.children}
    </dataStore.Provider>
  )
}
