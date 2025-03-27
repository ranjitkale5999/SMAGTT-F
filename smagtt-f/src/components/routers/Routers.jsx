import React from 'react';
import Login from '../login/Login';
import RegistrationPage from '../login/RegistrationPage';
import Profile from '../login/Profile';
import UserManagement from '../login/UserManagement';
import UpdateUser from '../login/UpdateUser';
import { Routes, Route } from "react-router-dom";
import UserService from '../../services/UserService';

const Routers = () => {
    return (
      <>
      <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Login/>} />
      {/* <Route path="/contact-us" element={<Contactus/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<RegistrationPage/>} />
      <Route path="/profile" element={<Profile/>} />
  
      //  {/* Check if user is authenticated and admin before rendering admin-only routes */}
       {UserService.adminOnly() && (
                <>
                  <Route path="/register" element={<RegistrationPage />} />
                  <Route path="/admin/user-management" element={<UserManagement/>} />
                  <Route path="/update-user/:userId" element={<UpdateUser />} />
                </>
              )}
      </Routes>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Routes>
      </Router> */}
      </>
      // <>
      // </>
    )
  }
  
  export default Routers
  