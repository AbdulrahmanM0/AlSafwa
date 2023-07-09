import BottomPart from "./FooterComponents/Bottom/BottomPart";
import TopPart from "./FooterComponents/Top/TopPart";
import SplitItemFooter from "./FooterComponents/SplitItemFooter";

export default function Footer() {
  return (
    <footer>
        <SplitItemFooter />
        <TopPart />
        <BottomPart />
    </footer>
  )
}
