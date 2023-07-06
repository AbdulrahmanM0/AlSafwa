import './SplitItem.css';

export default function SplitItem(props) {
  const {splitImg} = props;
  return (
    <div className='w-100 split-img-container'>
        <img src={splitImg} alt='cloude' />
    </div>
  )
}
