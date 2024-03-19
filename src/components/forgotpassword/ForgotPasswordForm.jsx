// ForgotPasswordForm.jsx

import React, { useState } from 'react';
import './ForgotPassword.css'
const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission - e.g., send reset password link to the provided email
  };

  return (
    <form className="forgot-password-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForgotPasswordForm;
