import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Popup from '../popup_messages/PopupMessage';
import { ClipLoader } from 'react-spinners'; 
import './Login.css';

function LandingLogin() {
  const navigate = useNavigate();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const [popupType, setPopupType] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [loginResponse, setLoginResponse] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setEmailError('');
    setPasswordError('');
    setLoading(true); 

    if (!email) {
      setEmailError('Email is required');
      setLoading(false); 
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      setLoading(false); 
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      setLoading(false); 
      return;
    }

    const HOSTED_SERVER_URL = 'http://localhost:3000';

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, {
        email,
        password,
      });

      setLoginResponse(response);

      if (response.data.statusCode === 200) {
        console.log('Login successful');
        localStorage.setItem('accessToken', response.data.data);
        setShowPopup(true); 
        setPopupType('success');
        setPopupMessage('Login Successful');
      } else {
        setErrorMessage('Login Failed!');
        setShowPopup('true');
        setPopupType('error');
        setPopupMessage('Login Failed');
      }
    } catch (error) {
      setShowPopup('true');
      setPopupType('error');
      setPopupMessage(error.response.data.message);
      console.error('Error during login:', error.response.data.message);
    } finally {
      setLoading(false); 
    }
  };

  const handlePopupOK = () => {
    setShowPopup(false);
    if (popupType === 'success' && loginResponse) {
      // localStorage.setItem('token', loginResponse.data.data);
      
      setLoading(true); 
      
      setTimeout(() => {
        navigate('/admin');
      }, 100); 
    }
  };

  const handlePopupTryAgain = () => {
    setShowPopup(false);
  };

  

  return (
    <>
      <div>
        <section className="container">
          <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
              <h1 className="opacity">LOGIN</h1>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <p className="error-message">{emailError}</p>}
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="password"
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <button className="opacity" type="submit">
                  SUBMIT
                </button>
              </form>
              <div className="register-forget opacity">
                <a href="">REGISTER</a>
                <Link to={"/forgot-password"}> FORGOT PASSWORD</Link>
              </div>
            </div>
            <div className="circle circle-two"></div>
          </div>
          <div className="theme-btn-container"></div>
        </section>
      </div>

      {loading && (
        <div className="spinner-container">
          <ClipLoader color="black" loading={loading} size={50} />
        </div>
      )}

      {showPopup && <Popup type={popupType} message={popupMessage} onOK={handlePopupOK} onTryAgain={handlePopupTryAgain} />}
    </>
  );
}

export default LandingLogin;
