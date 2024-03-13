import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';
// import Landing_Nav from '../landing/Landing_Nav';



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

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert('Form submited successfully');

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


    // if (Object.keys(newErrors).length === 0) {
    //   console.log('Form submitted successfully');
      
    // }
    // const HOSTED_SERVER_URL = 'http://localhost:3000';
    if (Object.keys(newErrors).length === 0) {
      const HOSTED_SERVER_URL = 'http://localhost:3000';
  

    

    try {
      // const userExist = await checkUserExistance(email);

      // if (userExist) {
      //   alert('User with this email already exists');
      //   return;
      // }
      const response = await axios.post(`${HOSTED_SERVER_URL}/users`, {
        first_name,
        last_name,
        email,
        password,
      });

      console.log('Response:', response);

      if (response && response.data && response.data.statusCode) {
        alert('Form submitted successfully');
        console.log('Form submitted successfully');
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        // navigate.push('/Success');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form Submission:', error.response ? error.response.data.message : error.message);
    }


    setSubmit(false);
  }
  };

  // const checkUserExistence = async (email) => {
  //   try {
  //     const response = await axios.get(`${HOSTED_SERVER_URL}/users/check?email=${email}`);
  //     return response.data.exists;
  //   } catch (error) {
  //     console.error('Error checking user existence:', error.response ? error.response.data.message : error.message);
  //     return false;
  //   }
  // };



  return (
    <>


      {/* <Landing_Nav/> */}
      <section className="container">
        <div className="login-container">
          {/* <div className="circle circle-one"></div> */}

          <div className="form-container">

            {/* <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            /> */}
            <h1 className="opacity">ADD USER</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" value={first_name} onChange={handleFirstnameChange} />
              {errors.first_name && <p className='error-message'>{errors.first_name}</p>}
              <input type="text" placeholder="Last Name" value={last_name} onChange={handleLastnameChange} />
              {errors.last_name && <p className='error-message'>{errors.last_name}</p>}
              <input type="email" placeholder="EMAIL" value={email}  onChange={handleEmailChange} />
              {errors.email && <p className='error-message'>{errors.email}</p>}
              <input type="password" placeholder="PASSWORD" autoComplete="password" value={password} onChange={handlePasswordChange} />
              {errors.password && <p className='error-message'>{errors.password}</p>}
              <button type="submit" >SUBMIT </button>
            </form>


          </div>

          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>

    </>
  );
}

export default AddUserPage;


