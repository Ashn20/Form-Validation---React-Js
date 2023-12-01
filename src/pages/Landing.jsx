//LandingPage.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Landing.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LandingPage = () => {

    const navigate=useNavigate();

    useEffect(()=>{
        const check=localStorage.getItem('isLoggedin');
        if (check==='true'){
            navigate('/dashboard');
            return;
        }
        localStorage.setItem('isLoggedin',false);
    });


    return (
      <div className="container d-flex container-landing mt-2 mb-5">
        <div className="row">
          <div className="col-md-6 mt-2  align-items-center justify-content-center">
            <img src="/images/LandingPage.jpg" alt="Signup" className="img-fluid landing-image" />
          </div>
          <div className="col-md-6 mt-2 justify-item-center align-item-center landing-primary">
            <h2 className='text-center laning-heading mt-5'>Welcome to Form Validation</h2>
            <h4 className='text-white'>
              This Application will make sure all your input validation by using Formik.
            </h4>
            //<h4 className='text-warning bg-gradient-light mt-4'></h4>
            <div className="container mt-4">
            <div className="row">
            <div className="col text-center">
              <b className='topic'></b>
              <ul className="text-white">
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
              </ul>
            </div>
            <div className="col text-center">
              <b className='topic'></b>
              <ul className="text-white">
                <li className="list-group-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
          <div className='text-center mt-2 mb-4'>
            <Link to="/login" className="btn w-50 btn-primary m-3">
              Login
            </Link>
            <Link to="/register" className="btn w-50 btn-success">
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;