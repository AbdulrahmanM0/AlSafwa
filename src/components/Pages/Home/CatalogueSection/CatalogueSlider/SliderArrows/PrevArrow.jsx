import './Arrows.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function PrevArrow(props) {
    const { onClick, className } = props;

    return (
        <div className={`prevArrow ${className}`} onClick={onClick}>
            <KeyboardArrowLeftIcon />
        </div>
    );
}

