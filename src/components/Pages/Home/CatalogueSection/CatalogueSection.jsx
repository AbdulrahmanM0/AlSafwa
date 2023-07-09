import HeadComponent from "../HeadComponent/HeadComponent";
import CatalogueSlider from "./CatalogueSlider/CatalogueSlider";

export default function CatalogueSection() {
  return (
    <section>
        <HeadComponent sectionName={'Catalogue'}/>
        <CatalogueSlider />
    </section>
  )
}
