import './card.css';
import data from './Data';
import link from './Links';
import { useLocation } from 'react-router-dom';


const Card = () => {
  const loc = useLocation();
  const {sr} = loc.state;
  console.log(sr);
  return (
    <>
    <div className='header'>
      <img src={link[sr]} alt="cover" className='head'/>
      <div className='description'>
        <h1>{data[sr][1]}</h1><br />
        <p>{data[sr][2]}</p>
        <div className='rate'>{data[sr][4]}</div>    
    </div>
    </div>
    
    </>
  )
}

export default Card
