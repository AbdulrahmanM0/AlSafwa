import HeadComponent from '../HeadComponent/HeadComponent';
import ServicesCards from './ServicesItems/ServicesCards';
import './ServicesSection.css';

export default function ServicesSection() {

  return (
    <section className='services-section'>
            <HeadComponent sectionName={'Services'} />
            <ServicesCards />
    </section>
  )
}
