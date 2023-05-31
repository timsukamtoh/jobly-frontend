import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetailsPage from './CompanyDetailsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage'


/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, LoginPage, SignUpPage, ProfilePage, CompanyPage, CompanyDetailsPage, JobsPage}
 */
function RouteList() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />}/>

      <Route path="/login" element={<LoginPage />}/>

      <Route path="/signup" element={<SignUpPage />}/>

      <Route path="/profile" element={<ProfilePage />}/>

      <Route path="/companies/:handle" element={<CompanyDetailsPage />}/>

      <Route path="/companies" element={<CompaniesPage />}/>

      <Route path="/jobs" element={<JobsPage />}/>

      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  );
}

export default RouteList;