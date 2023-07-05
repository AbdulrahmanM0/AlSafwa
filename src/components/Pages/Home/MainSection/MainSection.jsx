import './MainSection.css';
import MainSlider from './MainSlider';
import cloudeImg from '../../../../assets/covers/header_shape.png';

export default function MainSection() {
  return (
    <section className='main-section'>
      <div className='container h-100 d-flex align-items-center justify-content-between'>
        <div className='curtain'>
          <div className='typewriter'>
            <h1>Al Safwa</h1>
          </div>
        </div>
        <div className='sliderContainer w-50'>
          <MainSlider />
        </div>
      </div>
      <div className='w-100 cloudeImg' style={{overflow: 'hidden' }}>
        <img src={cloudeImg}  alt='cloude'/>
      </div>
    </section>
  )
}
