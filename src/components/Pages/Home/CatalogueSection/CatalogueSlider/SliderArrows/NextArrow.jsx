import './Arrows.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function NextArrow(props) {
    const { onClick, className } = props;

    return (
        <div className={`nextArrow ${className}`} onClick={onClick}>
            <KeyboardArrowRightIcon />
        </div>
    );
}
