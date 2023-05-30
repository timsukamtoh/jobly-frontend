import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetailsPage from './CompanyDetailsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>

      <Route path="/company/:handle" element={<CompanyDetailsPage />}/>

      <Route path="/companies" element={<CompaniesPage />}/>

      <Route path="/jobs" element={<JobsPage />}/>

    </Routes>
  );
}

export default RouteList;