import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import JoblyApi from "./api";
import JobList from "./JobList";
import userContext from "./userContext";

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
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  /** Gets and loads company data on mount */
  useEffect(function () {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, []);

  /**redirects to login if not logged in */
//   if (!user){
//     return navigate("/login", {state :{
//       message: "Must login to see company details",
//       type: "danger"
//     }})
//   }

  if (!company) return <h1>Loading...</h1>;

  return(
    <div>
      <h2>{company.name}</h2>
      <h4>{company.description}</h4>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetailsPage;