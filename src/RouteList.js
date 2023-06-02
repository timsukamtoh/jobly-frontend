import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './HomePage';
import CompanyDetailsPage from './CompanyDetailsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage';

/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, LoginPage, SignUpPage, ProfilePage, CompanyPage, CompanyDetailsPage, JobsPage}
 */
function RouteList({ login, signUp, updateUser }) { //TODO: move protection logic here
  // /login {user ? <HomePage/> : <LoginPage/>}
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage login={login} />} />

      <Route path="/signup" element={<SignUpPage signUp={signUp}/>} />

      <Route path="/profile" element={<ProfilePage updateUser={updateUser}/>} />

      <Route path="/companies/:handle" element={<CompanyDetailsPage />} />

      <Route path="/companies" element={<CompaniesPage />} />

      <Route path="/jobs" element={<JobsPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;