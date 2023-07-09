import Slider from 'react-slick';
import { useContext } from 'react';
import { dataStore } from '../../../../HandleData/ContextData';

export default function CatalogueSlider() {
    const { CatalogueImages } = useContext(dataStore)

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  
    return (
    <div className='container'>
            <Slider {...settings}>
                {
                    CatalogueImages.map(page => (
                        <div key={page}>
                            <img className='w-100' src={page} alt='catalogue page' />
                        </div>
                    ))
                }
            </Slider>
    </div>
  )
}
