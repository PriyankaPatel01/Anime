import Login from './components/Login';
import Card from './components/Card';
import Home from './components/Home';
import Car from './components/Car';

import './components/home.css';
import './components/login.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/card' element={<Card/>} />
        <Route path='/car' element={<Car/>} />

      </Routes>
    </Router>
  )
}

export default App
