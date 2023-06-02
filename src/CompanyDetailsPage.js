import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobList from "./JobList";

/**
 * Component for Company Details Page
 *
 * State:
 * - company : object {}
 *
 * RoutesList -> CompanyDetailsPage -> JobsList
 */
function CompanyDetailsPage() {
  const [company, setCompany] = useState({});
  const { handle } = useParams();

  /** Gets and loads company data on mount */
  useEffect(function () {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, []);

  if (!company) return <h1>Loading...</h1>;

  return(
    <div className="text-start">
      <h2 className = "ms-5 mt-3">{company.name}</h2>
      <h4  className ="ms-5">{company.description}</h4>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetailsPage;