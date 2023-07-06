
import './SliderItems.css';
import { Link } from 'react-router-dom';

export default function Item1(props) {
  const {item,index} = props;
  return (
    <>
    <div>
        <Link to={`/product/${index}`}>
          <img className='sliderItem' src={item} alt='product'/>
        </Link>
    </div>

    </>
  )
}
