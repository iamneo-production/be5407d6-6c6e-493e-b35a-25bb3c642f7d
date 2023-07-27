import React from 'react';
import '../../App.css'
import { Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer bg-black text-light"  style = {{backgroundColor:'black',bottom: '-100px'}}>
    <div style={{backgroundColor:'black'}}>
      <div className="container" style={{backgroundColor:'black'}}>
        <div className="row">
          <div className="col-md-6">
            <h3>More To Know</h3>
            <p>
              It is a open platform for users to implement their for their referrence of inventory treasures in a most secured manner.
            </p>
            <p>
              This Platforms Makes Itself More Flexible for the user who are in small large scale industries.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li><i className="fab fa-instagram"></i>
                Instagram
              </li>
              <li><i className="fab fa-facebook"></i>
               Facebook
              </li>
              <li>
              <i className="fab fa-linkedin"></i>
                  Linkedin
              </li>
              <li>
              <i className="fab fa-github"></i>
                               GitHub
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, Coimbatore, India
              </li>
              <li>
                <i className="fas fa-phone"></i> +1 123-456-7890
              </li>
              <li>
               <i className="fas fa-envelope"></i> info@example.com
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center">&copy; {new Date().getFullYear()} MegaVentory. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
