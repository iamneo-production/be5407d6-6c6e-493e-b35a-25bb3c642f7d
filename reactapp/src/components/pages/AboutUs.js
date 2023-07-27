import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutMe.css';
import icon from '../../assets/images/inventory.png';


const AboutUs = () => {
  return (
    <div className="about-us-page" >
      <div className="container mt-5">
        <div className="row justify-content-center" style={{color: 'white', backgroundColor:'black', borderRadius: '20px',}}>
          <div className="col-md-8">
            <h1 className="display-4 text-center mb-4">About Us</h1>
            <img
              className="img-fluid rounded-circle mx-auto d-block mb-4"
              src={icon} alt='icon'
              
            />
            <p className="lead text-center">
              Welcome to Megaventory, your trusted partner in cloud-based Inventory, Sales, and Manufacturing management. We are dedicated to empowering Indian small and medium businesses by providing innovative solutions to optimize your operational processes and boost efficiency.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="row mt-5" style={{color: 'white', backgroundColor:'#3500A7', borderRadius: '20px',}}>
          <div className="col-md-12" >
            <h2 className="section-title text-center" style={{color: 'white',}}>Our Mission</h2>
          </div>
          <div className="col-md-12">
            <p className="lead text-center">
              At Megaventory, our mission is to revolutionize the way businesses manage their inventory, sales, and manufacturing operations. We aim to simplify complex processes and equip entrepreneurs with the tools they need to succeed in a competitive market. Our innovative software enables you to streamline your workflow, reduce costs, and enhance customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5"  style={{ borderRadius: '20px',}}>
          <div className="col-md-12">
            <h2 className="section-title text-center"  style={{color: 'white'}}>Why Choose Us</h2>
          </div>
          <div className="col-md-4">
            <div className="feature-card card mb-4">
              <div className="card-body">
                <h5 className="feature-title card-title">Advanced Technology</h5>
                <p className="feature-description card-text">
                  We leverage cutting-edge technology to deliver top-notch inventory, sales, and manufacturing management solutions. Stay ahead of the competition with our innovative software.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card card mb-4">
              <div className="card-body">
                <h5 className="feature-title card-title">Easy Integration</h5>
                <p className="feature-description card-text">
                  Seamlessly integrate Megaventory with your existing systems and processes. Our user-friendly platform ensures a smooth and hassle-free experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card card mb-4">
              <div className="card-body">
                <h5 className="feature-title card-title">Dedicated Support</h5>
                <p className="feature-description card-text">
                  Our dedicated support team is here to assist you at every step of your journey with Megaventory. Get prompt and personalized assistance whenever you need it for any time access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="row mt-5" style = {{backgroundColor : '#3500A7', color:'white', borderRadius: '20px',}}>
          <div className="col-md-12" >
            <h2 className="section-title text-center"  style={{color: 'white',}}>Testimonials</h2>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card card mb-4">
              <div className="card-body">
                <p className="testimonial-text card-text">
                  "Megaventory has been a game-changer for our business. The inventory management features have helped us stay organized and ensure we never run out of stock. Highly recommended!"
                </p>
                <p className="testimonial-author card-text">
                  - John Doe, CEO of XYZ Company
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" >
            <div className="testimonial-card card mb-4">
              <div className="card-body">
                <p className="testimonial-text card-text">
                  "I can't imagine managing our manufacturing process without Megaventory. The platform is intuitive and has saved us valuable time and resources."
                </p>
                <p className="testimonial-author card-text">
                  - Jane Smith, COO of ABC Manufacturing
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <br>






      </br>
    </div>
  );
};

export default AboutUs;
