import SplitItem from '../SplitItem/SplitItem';
import './HeadComponent.css';

export default function HeadComponent(props) {
    const {sectionName} = props;
  return (
    <div>
        <div className='headClass container'>
            <h2>{sectionName}</h2>
        </div>
    </div>
  )
}
