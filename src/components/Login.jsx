
import icon from './images/icon.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [name, setname]=useState("");
  const [pass, setpass]=useState("");
  const nav=useNavigate();

  const handleClick1=(e)=>
  {
    const x=e.target.value;
    setname(x);
    
  }

  const handleClick2=(e)=>
  {
    const x=e.target.value;
    setpass(x);
    
  }
  


  const handleSubmit = (e) =>
  {
    e.preventDefault();

  }

  const [go, setgo]=useState(false);

  if(go)
  {
    
    if(pass!=='1234')
    {
      alert("wrong password");
      setgo(false);

    }
    else if(name!=='priyanka')
    {
      alert("wrong name")
      setgo(false);
    }
    else
    {
      nav('/home');
    }
  }

  
  return (
    <>
    <div className="login sm">
      <img src={icon} alt="icon" className='icons'/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label><br />
        <input type="text" name='user' onChange={handleClick1} value={name} /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name='pass' onChange={handleClick2} value={pass} /><br /><br />
        <button type='submit' className='btn' onClick={() => {setgo(true)}}>LogIn</button>
      </form>
    </div>

    <div className="ld mobile-text">
    <img src={icon} alt="icon" className='icon-sm'/>
    <form>
        <label htmlFor="username">User Name</label><br />
        <input type="text" /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" /><br /><br />
        <button type='submit' className='btn'>LogIn</button>
      </form>
    </div>
    </>
  )
}

export default Login
