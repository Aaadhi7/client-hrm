import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import "./ForgotPassword.css"

function ForgotPasswordPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [errorMessage,setErrorMessage] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(''); 
    }

    const handleForgotPassword = async (e) => {

        setErrorMessage('');

        if (!email) {
            setEmailError("Email is required !");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

        if(!emailRegex.test(email)) {
            setEmailError('Invalid email format !')
        }

        const HOSTED_SERVER_URL = "http://localhost:3000"

        try { 
            const response = await axios.post(`${HOSTED_SERVER_URL}/forgot-password`,{
            email
           } );

           if(response.data.statusCode === 200){
            console.log('Email sent successful');
        alert('Email sent successful ');

        navigate('/login')
        
           }else{
            setErrorMessage('Email senting failed')
            
            return ;
           }
        }catch(error){
            console.log("error forgotting password : ",error.response.data.message)

        }
        
    }

   

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Forgot Password</h1>
                    <h6 className="information-text">Enter your registered email to reset your password.</h6>
                    <div className="form-group">
                        <input type="email" name="user_email" id="user_email" value={email} onChange={handleEmailChange} />
                        {emailError && <p className="error-message">{emailError}</p>}
                        <p><label htmlFor="username">Email</label></p>
                        <button onClick={handleForgotPassword}>Reset Password</button>
                    </div>
                    <div className="footer">
                        <h5>New here? <a href="#">Sign Up.</a></h5>
                        <h5>Already have an account? <Link to={"/login"}>Sign In.</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPasswordPage;
