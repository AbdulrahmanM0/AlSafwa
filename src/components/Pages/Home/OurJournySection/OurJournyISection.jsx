import './OurJournySection.css';
import HeadComponent from '../HeadComponent/HeadComponent';
import OurJournyItems from './OurJournyItems/OurJournyItems';

export default function OurJournyISection() {
  return (
    <section className='ourJourny-section'>
        <div className='container'>
            <HeadComponent sectionName={'Our Journy'} />
            <OurJournyItems />
        </div>
    </section>
  )
}
