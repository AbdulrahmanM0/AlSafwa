import HeadComponent from '../HeadComponent/HeadComponent';
import './ServicesSection.css';
import { useEffect } from 'react';
import { InView } from 'react-intersection-observer';

export default function ServicesSection() {

  return (
    <section className='services-section'>
        <InView onChange={(inView,entry)=>{console.log('inView',entry)}}>
            <HeadComponent sectionName={'Services'}/>
        </InView>
    </section>
  )
}
