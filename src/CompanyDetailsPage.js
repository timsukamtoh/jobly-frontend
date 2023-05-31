import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";


/**
 * Component for Company Details Page
 *
 * State:
 * - company : object
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


  return(
    <div>
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
    </div>
  )
}

export default CompanyDetailsPage;