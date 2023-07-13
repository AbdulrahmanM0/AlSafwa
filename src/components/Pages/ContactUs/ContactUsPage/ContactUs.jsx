import MainSection from "../MainSection/MainSection";
import { useEffect } from 'react';

export default function ContactUs() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div>
      <MainSection />
    </div>
  )
}
