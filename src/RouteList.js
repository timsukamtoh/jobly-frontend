import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetailsPage from './CompanyDetailsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';

/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, CompanyPage, CompanyDetailsPage, JobsPage}
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>

      <Route path="/companies/:handle" element={<CompanyDetailsPage />}/>

      <Route path="/companies" element={<CompaniesPage />}/>

      <Route path="/jobs" element={<JobsPage />}/>

      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  );
}

export default RouteList;