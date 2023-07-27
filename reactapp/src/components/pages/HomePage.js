import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Chart, Pie, Bar,Line} from 'react-chartjs-2';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/inventory.png';

const HomePage = () => {
  // Sample data for the pie chart


  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales Data',
        data: [50, 70, 45, 80, 65, 90, 75],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1,
      },
    ],
  };
  const chartData = {
    labels: ['Sales', 'Inventory', 'Manufacturing'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [50, 70, 45, 80, 65, 90, 75],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="homepage">
    <SideBar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center" style = {{backgroundColor : 'black', color:'white', borderRadius: '20px',}}>
            <div className="col-md-6" >
              <h1 className="hero-title">Welcome to Our Website</h1>
              <p className="hero-subtitle">Your one-stop solution for Inventory, Sales, and Manufacturing management.</p>
             <Link to = "/about"> <button className="btn btn-primary">Learn More</button></Link>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid hero-image"
                src={icon} alt='icon' 
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" >
        <div className="container"  style = {{backgroundColor : 'black', color:'white', borderRadius: '20px',}}>
          <div className="row" >
            <div className="col-md-4">
              <div className="feature-card card mb-4">
                <div className="card-body">
                  <h5 className="feature-title card-title" >Advanced Technology</h5>
                  <p className="feature-description card-text">
                    We leverage cutting-edge technology to deliver top-notch inventory, sales, and manufacturing management solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card card mb-4">
                <div className="card-body">
                  <h5 className="feature-title card-title">Easy Integration</h5>
                  <p className="feature-description card-text">
                    Seamlessly integrate our platform with your existing systems and processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card card mb-4">
                <div className="card-body">
                  <h5 className="feature-title card-title">Dedicated Support</h5>
                  <p className="feature-description card-text">
                    Our dedicated support team is here to assist you at every step of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Chart Section */}
            <section className="chart-section">
        <div className="container"  style = {{backgroundColor : 'black', color:'white', borderRadius: '20px',}}>
          <div className="row">
            <div className="col-md-4">
              <div className="chart-card card mb-4">
                <div className="card-body">
                  <h5 className="chart-title">Monthly Sales Data</h5>
                  <Bar data={barChartData} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="chart-card card mb-4">
                <div className="card-body">
                  <h5 className="chart-title">Sales Data</h5>
                  <Pie data={chartData} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="chart-card card mb-4">
                <div className="card-body">
                  <h5 className="chart-title">Sales Trend</h5>
                  <Line data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section"  style = {{backgroundColor : 'transparent', color:'white', borderRadius: '20px',}}>
        <div className="container" >
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-card card mb-4">
                <div className="card-body">
                  <h5 className="pricing-title">Basic Plan</h5>
                  <p className="pricing-price">$19.99/month</p>
                  <ul className="pricing-features">
                    <li>Inventory Management</li>
                    <li>Sales Tracking</li>
                    <li>Basic Support</li>
                  </ul>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card card mb-4">
                <div className="card-body">
                  <h5 className="pricing-title">Pro Plan</h5>
                  <p className="pricing-price">$49.99/month</p>
                  <ul className="pricing-features">
                    <li>Inventory Management</li>
                    <li>Sales Tracking</li>
                    <li>Manufacturing Support</li>
                    <li>Premium Support</li>
                  </ul>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card card mb-4">
                <div className="card-body">
                  <h5 className="pricing-title">Enterprise Plan</h5>
                  <p className="pricing-price">Contact Us</p>
                  <ul className="pricing-features">
                    <li>Customized Solutions</li>
                    <li>Priority Support</li>
                    <li>Advanced Features</li>
                  </ul>
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
