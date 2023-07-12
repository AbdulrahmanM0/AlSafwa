import Slider from 'react-slick';
import { useContext } from 'react';
import { dataStore } from '../../../../HandleData/ContextData';
import './CatalogueSlider.css';
import PrevArrow from './SliderArrows/PrevArrow';
import NextArrow from './SliderArrows/NextArrow';
import { Link } from 'react-router-dom';

export default function CatalogueSlider() {
    const { CatalogueImages } = useContext(dataStore);

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className='container'>
            <Slider {...settings}>
                {CatalogueImages.map((page) => (
                    <div key={page}>
                        <Link to={`/product/${CatalogueImages.indexOf(page)}`}>
                            <img className='w-100' src={page} alt='catalogue page' />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
