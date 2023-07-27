// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import Signup from './components/pages/signup';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import Footer from './components/pages/Footer';
import NavigationBar from './components/pages/NavigationBar';
import './App.css';
import StockTable from './components/pages/StockTable';
import AboutUs from './components/pages/AboutUs';
import UserProfile from './components/pages/UserProfile';
import InventoryDashboard from './components/pages/InventoryDashboard';
import store from './components/pages/store';
import FeedBack from './components/pages/FeedBack';
import Billing from './components/pages/Billing';
import Services from './components/pages/Services';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Order from './components/pages/Order';


export default function App() {

  return (
    <Provider store={store}>
      <Router>
     
        <NavigationBar />
      
        <div>
       
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/stocktable" element={<StockTable />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/dash" element={<InventoryDashboard />} />
            <Route path = '/feed' element = {<FeedBack/>}/>
            <Route path = "/bill" element = {<Billing/>}/>
            <Route path = "/service" element = {<Services />} />
            <Route path = "/order" element = {<Order />} />
          </Routes>

        </div>
        <Footer />
      </Router>,
      
      </Provider>
 
  );
}
