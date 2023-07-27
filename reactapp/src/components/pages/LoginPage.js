import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEmail, setPass, setName } from './action';

import './store';

const LoginPage = ({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) => {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      window.alert("Successfully Logged In");
      const user = {
        email,
      };

      navigate('/home');
    } catch (error) {
      console.log(error);
      window.alert('Invalid Credentials');
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div className="container py-5" style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <center>
              <form onSubmit={check} style = {{backgroundColor : 'blue', color:'white' }}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="pass"
                    value={pass}
                    className="form-control"
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <Link to="/forget-password" className="mt-3 d-block text-center" style = {{backgroundColor : 'blue', color:'white'}}>
               Forgot Password
              </Link>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              </center>
              {checkpass && alert('Successful login ' + name)}
              {checkpass && navigate('/home')}
              <Link to="/register" className="mt-3 d-block text-center" style = {{backgroundColor : 'white', color:'black'}}>
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);