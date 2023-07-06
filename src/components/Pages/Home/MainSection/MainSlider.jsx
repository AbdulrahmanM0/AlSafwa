import Slider from "react-slick";
import Items from "./SliderItem/Items";
import { useContext } from "react";
import { dataStore } from "../../../HandleData/ContextData";

export default function MainSlider() {
  const { CatalogueImages } = useContext(dataStore);
  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 3000
  }
  return (
    <div>
      <Slider {...settings}>
        {CatalogueImages.map(item=>
          
          <div key={item}>
            <Items item={item} index={CatalogueImages.indexOf(item)} />
          </div>
        )}
      </Slider>
    </div>
  );
}
