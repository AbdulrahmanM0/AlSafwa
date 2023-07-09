import MainSection from "../MainSection/MainSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import SplitItem from "../SplitItem/SplitItem";
import cloudeImg from '../../../../assets/covers/header_shape.png';
import waveImg from '../../../../assets/covers/wave.svg';
import waveImg2 from '../../../../assets/covers/wave (1).svg';
import OurJournyISection from "../OurJournySection/OurJournyISection";
import CatalogueSection from "../CatalogueSection/CatalogueSection";


export default function Home() {
  return (
    <div>
        <MainSection />
          <SplitItem splitImg={cloudeImg} />
        <ServicesSection />
          <SplitItem splitImg={waveImg}/>
        <OurJournyISection />
          <SplitItem splitImg={waveImg2} />
        <CatalogueSection />
    </div>
  )
}
