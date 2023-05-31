import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

/**
 * Component for Companies List page
 *
 * State:
 * - companies : array of company objects
 *
 * RoutesList -> CompanyPage -> CompanyCards
 */
function CompaniesPage() {
  const [companies, setCompanies] = useState(null);

  /** Gets and loads all companies on mount */
  useEffect(function () {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  /**
   * Function to pass down to form, and extract search term
   * @param {Object} formData
   * @returns String containing search term
   */
  function getSearchTerm (formData){
    return formData.search
  }

  if (!companies) return <h1>Loading...</h1>;

  return(
    <div>
      <SearchForm getSearchTerm={getSearchTerm}/>
      {companies.map(company => <CompanyCard company={company}/>)}
    </div>
  )
}
export default CompaniesPage;