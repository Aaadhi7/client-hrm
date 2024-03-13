import React from 'react';
import { Link } from 'react-router-dom';
// import Display from '../display/Display';
import './User.css'; 

function AddUserNav() {
  return (
    <div className='bg'>

      
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'>Contact Us</a></li>
          
          <li>
            <Link to={'/login'}><button className="login-button">Login</button></Link></li>
          {/* <li><Link to={'/add_user'}><button className="join-button">Add User</button></Link></li> */}
          
        </ul>
      </nav>
    
      
      
      {/* <p className='text'>Web Development vs. Web Programming</p>
<p className='text1'>Web development and web programming sound very similar and they are. But there’s one very important distinction. 
</p> */}
    </div>
  );
};

export default AddUserNav;
