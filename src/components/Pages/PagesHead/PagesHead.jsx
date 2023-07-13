import './PagesHead.css';

export default function PagesHead(props) {
    const {pageHead} = props;
  return (
    <div className='container'>
        <div className=' pageHead'>
            <h1>{pageHead}</h1>
        </div>
    </div>
  )
}
