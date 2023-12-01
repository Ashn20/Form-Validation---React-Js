
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dasboard';


function App() {

  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;