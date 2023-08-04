import React, { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import HomePage from './HomePage';
import CompanyDetailsPage from './CompanyDetailsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage';
import userContext from './userContext';



/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, LoginPage, SignUpPage, ProfilePage, CompanyPage, CompanyDetailsPage, JobsPage}
 */
function RouteList({ login, signUp, updateUser }) {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/profile" element={<ProfilePage updateUser={updateUser} />} />

        <Route path="/companies/:handle" element={<CompanyDetailsPage />} />

        <Route path="/companies" element={<CompaniesPage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  else {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage login={login} />} />

        <Route path="/signup" element={<SignUpPage signUp={signUp} />} />

        <Route path="/*" element={<Navigate to="/login" />}/>
      </Routes>
    );
  }
}

export default RouteList;