import SplitItem from '../SplitItem/SplitItem';
import './HeadComponent.css';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

export default function HeadComponent(props) {
  const {sectionName} = props;
  const [isInterSecting,setInterSecting] = useState(false);
  return (
    <InView onChange={(inView,entry)=>{setTimeout(()=>setInterSecting(inView),500)}}>
      <div className={isInterSecting ? 'interSecting' :'notInterSecting' } >
          <div className='headClass container'>
              <h2>{sectionName}</h2>
          </div>
      </div>
    </InView>
  )
}
