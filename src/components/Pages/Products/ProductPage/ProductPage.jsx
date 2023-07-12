import './ProductPage.css';
import { useParams } from "react-router-dom";
import { useContext , useEffect, useState } from "react";
import { dataStore } from "../../../HandleData/ContextData";


export default function ProductPage() {
    const { CatalogueImages } = useContext(dataStore);
    const [indexItem,setIndexItem] = useState(0);
    const {item} = useParams();

    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
      
    useEffect(()=>{
        setIndexItem(item)
    },[]);


  return (
    <section>    
        <div className='product-container'>
            <div>
                <img className="w-100" src={CatalogueImages[indexItem]} alt='product' />
            </div>
        </div>
    </section>
  )
}
