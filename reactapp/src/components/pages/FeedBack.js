import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './Api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const FeedBack = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formdata);
      window.alert(" Contact Details Sent Successfully");
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
    console.log(formdata);
  };

  return (
    <div className="container py-5" style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}> 
      <center>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body" style = {{backgroundColor : 'transparent'}}>
                <h2 className="text-center mb-4">CONTACT</h2>
                <form onSubmit={handleSubmit} style = {{backgroundColor : 'blue', color:'white' }}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      id="subject"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br />
    </div>
  );
};

export default FeedBack;
