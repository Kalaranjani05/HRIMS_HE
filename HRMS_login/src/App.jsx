import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Otp from './Components/Otp';
import NewPassword from './Components/NewPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp/:token" element={<Otp />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
