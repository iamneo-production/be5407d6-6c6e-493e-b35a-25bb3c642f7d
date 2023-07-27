import React from 'react';
import '../../App.css';
import icon from '../../assets/images/user.png';

const SideBar = () => {
  return (
    <div className="sidebar" style={{ borderColor: 'white', backgroundColor: 'black', paddingBottom: '20px', position: 'fixed', top: 0, left: 0 }}>
      <div className="main-content">
        <h1 style={{ color: 'white', backgroundColor: '#4600de', borderRadius: '10px' }}>
          <center>
            <img src={icon} alt='icon' style={{ width: '50px' }}></img>
            Dashboard
          </center>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/home" style={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>Dashboard</a>
        </li>
        <li>
          <a href="/stocktable" style={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>Inventory</a>
        </li>
        <li>
          <a href="/bill" style={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>Billing</a>
        </li>
        <li>
          <a href="/order" style={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>Orders</a>
        </li>
        <li>
          <a href="/dash" style={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>Stocks</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
