import React from 'react';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const email = useSelector((state) => state.login.email);
    const username = email.substr(0, email.indexOf('@'));
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"  style = {{backgroundColor : 'black'}}>
      
        <a className="navbar-brand" href="/"  style = {{backgroundColor : '#4600de', borderRadius:'20px'}}>MEGAVENTORY</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="/" style = {{backgroundColor : '#4600de', borderRadius:'20px',  fontColor:'white'}}>Home</a> 

            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about" style = {{backgroundColor : '#4600de', borderRadius:'20px',marginLeft:'30px' , Color:'white'}}>About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/service"  style = {{backgroundColor : '#4600de', borderRadius:'20px', marginLeft:'30px',  Color:'white'}}>Services</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link" href="/feed"  style = {{backgroundColor : '#4600de', borderRadius:'20px', marginLeft:'30px', Color:'white'}}>Contact</a>
            </li>
            <li className="nav-item active" >
            <a className="nav-link" href="/login"  style = {{backgroundColor : '#4600de', borderRadius:'20px', marginLeft:'30px', Color:'white'}}>{username}</a>
            </li>
        
          </ul>
        </div>   
    </nav>
  );
};

export default NavigationBar;
