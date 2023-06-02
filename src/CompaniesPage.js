import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import userContext from "./userContext";

/**
 * Component for Companies List page
 *
 * State:
 * - companies : array of company objects
 *
 * RoutesList -> CompanyPage -> CompanyCards
 */
function CompaniesPage() {
  const [pageState, setPageState] = useState({ isLoading: true, companies: [] });
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  /** Gets and loads all companies on mount */
  useEffect(function () {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setPageState({ isLoading: false, companies });
    }
    getCompanies();
  }, []);

  /**redirects to login if not logged in */
  if (!user){
    return navigate("/login", {state :{
      message: "Must login to see companies",
      type: "danger"
    }})
  }

  /**
   * Function to pass down to form
   * Filters company search by nameLike
   * Sets array of companies to get request results
   * @param {Object} formData
   */
  async function nameLikeSearch(formData) {
    const companies = await JoblyApi.getCompanies(formData);
    setPageState(oldData => ({ ...oldData, companies }));
  }

  if (pageState.isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <SearchForm searchFunction={nameLikeSearch} term="nameLike" />
      {pageState.companies.length === 0 ?
        <h2>No Companies Found</h2> :
        pageState.companies.map(company => <CompanyCard company={company} key={company.handle} />)}
    </div>
  );
}
export default CompaniesPage;