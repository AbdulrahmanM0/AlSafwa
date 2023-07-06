import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import VerifiedIcon from '@mui/icons-material/Verified';
import './ServicesCards.css';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

export default function ServicesCards() {
    const [isInterSecting,setInterSecting] = useState(false);

  return (
    <InView onChange={(inView,entry)=>{setTimeout(()=>setInterSecting(inView),1000)}} >
        <div className={isInterSecting ? 'interSecting' :'notInterSecting' } >
            <div className='container'>
                <div className='row services-container'>
                    <div className="col" style={{minWidth: '300px'}} >
                        <div>
                        <EqualizerIcon />
                        </div>
                        <div>
                            <p>
                            Expert food processing and packaging services for safe and high-quality products.
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{minWidth: '300px'}} >
                        <div>
                            <VerifiedIcon />
                        </div>
                        <div>
                            <p>
                            Rigorous quality control and testing for consistent product excellence.
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{minWidth: '300px'}} >
                        <div>
                            <SettingsSuggestIcon />
                        </div>
                        <div>
                            <p>
                            Customizable products and private labeling options to meet your unique needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </InView>
  )
}
