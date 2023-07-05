import Slider from "react-slick";
import Item1 from "./SliderItem/Item1";
import Item2 from "./SliderItem/Item2";
import Item3 from "./SliderItem/Item3";

export default function MainSlider() {
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
        <div>
          <Item1 />
        </div>
        <div>
          <Item2 />
        </div>
        <div>
          <Item3 />
        </div>
      </Slider>
    </div>
  );
}
