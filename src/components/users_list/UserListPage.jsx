import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditPage from '../editPage/EditPage'; // Import EditPage component

const UserListPage = () => {
  const [data, setData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/users', {
          headers: {
            'authorization': `Bearer ${token}`
          }
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditUser = (userId) => {
    setSelectedUserId(userId);
    // console.log ("userId : ",userId)
  };

  return (
    <div className='bg'>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((userData) => (
            <tr key={userData._id}>
              <td>{userData.first_name}</td>
              <td>{userData.last_name}</td>
              <td>{userData.email}</td>
              <td>
                <Link to={`/edit-user/${userData._id}`}>
                  <button onClick={() => handleEditUser(userData._id)}><img src="src\components\assets\eye.png" alt="view" /></button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUserId && <EditPage userId={selectedUserId} />} 
    </div>
  );
};

export default UserListPage;
