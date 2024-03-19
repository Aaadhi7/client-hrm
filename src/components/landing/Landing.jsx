import React from "react";
import {BrowserRouter as Router, Routes, Route, Link}from "react-router-dom";
// import LandingLogin from "../login/LandingLogin";
import Login from "../login/Login";
// import Landing_Nav from "../landing/Landing_Nav";
import Landing_Page from "./Landing_Page";
import AddUser from "../add_user/AddUser";
import Dashboard from "../dashboard/DashBoard";
// import Display from "../display/Display";
import UserList from "../users_list/UserList";
import ForgotPasswordForm from "../forgotpassword/ForgotPasswordForm";
import ForgotPasswordFormPage from "../forgotpassword/ForgotPasswordFormPage";

function Landing() {
    return(

<>
       
       <Router>
        <>
        <Routes>
            {/* <Route path={"/"} exact element={<Landing_Nav/>}/> */}
            <Route path={"/"} exact element={<Landing_Page/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/admin" exact element={<Dashboard/>}/>
            <Route path="/add_user" exact element={<AddUser/>}/>
            <Route path="/home" exact element = {<Landing_Page/>}/>
            <Route path="viewUser" exact element = {<UserList/>}/>
            <Route path="forgotpassword" exact element = {<ForgotPasswordForm/>}/>
        </Routes>
        </>
       </Router> 
       </>
    )
}
export default Landing ;