import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditPage.css";

export default function EditPage() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/users', {
          // headers: {
          //   "authorization": `Bearer ${token}`
          // }
        });
        const parsedData = response.data;
        setData(parsedData); // This line should be corrected
      } catch (error) {
        console.log("error : ", error);
      }
    };
    fetchData();
  }, []);

  const handleView = (item) => {
    setSelectedUser(item);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <>
      {selectedUser && ( 
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>ID:</strong> {selectedUser._id}</p>
          <p><strong>First Name:</strong> {selectedUser.first_name}</p>
          <p><strong>Last Name:</strong> {selectedUser.last_name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Password:</strong> {selectedUser.password}</p>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </>
  );
}
