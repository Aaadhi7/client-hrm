import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/users', {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`
          }
        });

        const parsedData = await response.json();
        setData(parsedData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once
  console.log("data : ", data);

  return (
    <div className='bg'>
      <h1>User List</h1>
      {/* <div><h1>Total users : {data.length}</h1></div> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data._id}>
              <td>{data._id}</td>
              <td>
                <div>{data.first_name}</div>
              </td>
              <td>
                <div>{data.last_name}</div>
              </td>
              <td>
                <div>{data.email}</div>
              </td>
              <td>
                <div>{data.password}</div>
              </td>

              <td>
                <button onClick={() => handleEdit(data._id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleSave(data._id)}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};
export default UserListPage;
