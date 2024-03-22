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
import EditPage from "../editPage/EditPage";
import ForgotPassword from "../forgot_password/ForgotPassword";
import ResetPasswordPage from "../reset-password/ResetPasswordPage";
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
            <Route path="/viewUser" exact element = {<UserList/>}/>
            <Route path="/edit-user" exact element = {<EditPage/>}/>
            <Route path="/forgot-password" exact element = {<ForgotPassword/>}/>
            <Route path="/reset-password" exact element ={<ResetPasswordPage/>}/>

        </Routes>
        </>
       </Router> 
       </>
    )
}
export default Landing ;