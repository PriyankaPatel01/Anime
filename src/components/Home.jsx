import data from './Data';
import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';
import c4 from './images/c4.webp';
import c5 from './images/c5.jpe';
import c6 from './images/c6.jpg';
import c7 from './images/c7.jpg';
import c8 from './images/c8.jpg';
import c9 from './images/c9.jpg';
import c10 from './images/c10.jpg';
import c11 from './images/c11.webp';
import c12 from './images/c12.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home">
      <h1>Top Animes</h1>
      <div className="cover">

        <Link to="/card" state={{sr:0}}>
        <div className="container">
          <div className="card">
              <img src={c1} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[0][1]}</h2><br />
              <p>{data[0][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:1}}>
        <div className="container">
          <div className="card">
              <img src={c2} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[1][1]}</h2><br />
              <p>{data[1][3]}</p>
            </div>
          </div>
        </div>       
        </Link>

        <Link to="/card" state={{sr:2}}>
        <div className="container">
          <div className="card">
              <img src={c3} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[2][1]}</h2><br />
              <p>{data[2][3]}</p>
            </div>
          </div>
        </div> 
        </Link>

        <Link to="/card" state={{sr:3}}>
        <div className="container">
          <div className="card">
              <img src={c4} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[3][1]}</h2><br />
              <p>{data[3][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:4}}>
        <div className="container">
          <div className="card">
              <img src={c5} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[4][1]}</h2><br />
              <p>{data[4][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:5}}>
        <div className="container">
          <div className="card">
              <img src={c6} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[5][1]}</h2><br />
              <p>{data[5][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:6}}>
        <div className="container">
          <div className="card">
              <img src={c7} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[6][1]}</h2><br />
              <p>{data[6][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:7}}>
        <div className="container">
          <div className="card">
              <img src={c8} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[7][1]}</h2><br />
              <p>{data[7][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:8}}>
        <div className="container">
          <div className="card">
              <img src={c9} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[8][1]}</h2><br />
              <p>{data[8][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:9}}>
        <div className="container">
          <div className="card">
              <img src={c10} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[9][1]}</h2><br />
              <p>{data[9][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:10}}>
        <div className="container">
          <div className="card">
              <img src={c11} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[10][1]}</h2><br />
              <p>{data[10][3]}</p>
            </div>
          </div>
        </div>
        </Link>

        <Link to="/card" state={{sr:11}}>
        <div className="container">
          <div className="card">
              <img src={c12} alt="cover1"  className='front'/>
            <div className="back">
              <h2>{data[11][1]}</h2><br />
              <p>{data[11][3]}</p>
            </div>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
    </>
  )
}

export default Home
