import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';

function AddUserPage() {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOutsideClick = (e) => {
   
    if (!e.target.closest('input')) {
      setErrors({});
    }
  };

  useEffect(() => {
    
    document.addEventListener('click', handleOutsideClick);

    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!first_name) {
      newErrors.first_name = 'First name is required';
    }

    if (!last_name) {
      newErrors.last_name = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const HOSTED_SERVER_URL = 'http://localhost:3000';

      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.post(`${HOSTED_SERVER_URL}/users`, {
          first_name,
          last_name,
          email,
          password,
        },
        {
          headers : {
            'Authorization ': `Bearer ${token}`
          }
        });

        if (response && response.data && response.data.statusCode) {
          alert('Form submitted successfully');
          console.log('Form submitted successfully');
          setFirstname('');
          setLastname('');
          setEmail('');
          setPassword('');
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error during form Submission:', error.response ? error.response.data.message : error.message);
      }
    }

    setSubmit(false);
  };

  return (
    <>
      <section className="container">
        <div className="login-container">
          <div className="form-container">
            <h1 className="opacity">ADD USER</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" value={first_name} onChange={handleFirstnameChange} />
              {errors.first_name && <p className='error-message'>{errors.first_name}</p>}
              <input type="text" placeholder="Last Name" value={last_name} onChange={handleLastnameChange} />
              {errors.last_name && <p className='error-message'>{errors.last_name}</p>}
              <input type="email" placeholder="EMAIL" value={email} onChange={handleEmailChange} />
              {errors.email && <p className='error-message'>{errors.email}</p>}
              <input type="password" placeholder="PASSWORD" autoComplete="password" value={password} onChange={handlePasswordChange} />
              {errors.password && <p className='error-message'>{errors.password}</p>}
              <button type="submit">SUBMIT </button>
            </form>
          </div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
}

export default AddUserPage;
