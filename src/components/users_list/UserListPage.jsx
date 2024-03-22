import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';
import { Link } from 'react-router-dom';

const UserListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/users', {
          // method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`
            
          }
          
          
        });
       
        

        const parsedData = await response.data;
        setData(parsedData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    
  }, []); 
  console.log("data : ", data);

  return (
    <div className='bg'>
      <h1>User List</h1>
      {/* <div><h1>Total users : {data.length}</h1></div> */}
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            {/* <th >Password</th> */}
            {/* <th>View</th> */}
            <th>  </th>
            {/* <th>Save</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data._id}>
              {/* <td>{data._id}</td> */}
              <td>
                <div>{data.first_name}</div>
              </td>
              <td>
                <div>{data.last_name}</div>
              </td>
              
              <td>
                <div>{data.email}</div>
              </td>
              {/* <td>
                <div>{data.password}</div>
              </td> */}

              <td>
                {/* <button onClick={() => handleEdit(data._id)}> */}
                <Link to={"/edit-user"}>
                <button>
                <img src="src\components\assets\eye.png" alt="view" />
                </button></Link>
              </td>
              {/* <td>
                <button onClick={() => handleSave(data._id)}>Save</button>
              </td> */}
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );

};
export default UserListPage;
