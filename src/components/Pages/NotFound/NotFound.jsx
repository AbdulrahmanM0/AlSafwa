import './NotFound.css';
import { useEffect } from 'react';

export default function NotFound() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <section>
        <div className='notFound-Container container'>
            <h1> THE PAGE IS NOT FOUND </h1>
            <p> try another path </p>
        </div>
    </section>
  )
}
