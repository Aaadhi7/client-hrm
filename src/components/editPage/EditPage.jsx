import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EditPage.css' 

const EditPage = ({}) => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("userId : ", id); 

        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:3000/users/${id}`, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        });
        console.log("response : ", response);
        
        setUser(response.data);

        
        // console.log("user : ", user);
        
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);
  
  useEffect(() => {
    
    console.log("user : ", user);
  }, [user]);
  const handleEdit = () => {
   
    console.log('Edit clicked');
  };

  const handleSave = () => {
    
    console.log('Save clicked');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="background">
    <div className="user-details-container">
      <h1>User Details</h1>
      <form>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input type="text" value={user.first_name} />
        </div>
        <div className="form-group">
          <label className="label">Last Name:</label>
          <input type="text" value={user.last_name} />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input type="email" value={user.email} />
        </div>
        {/* <div className="form-group">
          <label className="label">Password:</label>
          <input type="password" value={user.password} />
        </div> */}
        <div className="button-group">
          <button type="button" className="edit-button" onClick={handleEdit}>Edit</button>
          <button type="button" className="save-button" onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EditPage;
