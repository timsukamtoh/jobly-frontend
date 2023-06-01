import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import JobList from "./JobList";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import userContext from "./userContext";
/**
 * Component for Jobs
 *
 * State:
 * - jobs : array of job objects
 *
 * RoutesList -> JobsPage -> JobsList
 */
function JobsPage() {
  const [pageState, setPageState] = useState({ isLoading: true, jobs: [] });
  const { user } = useContext(userContext);

  /** Gets and loads all jobs on mount */
  useEffect(function () {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setPageState({ isLoading: false, jobs });
    }
    getJobs();
  }, []);

  /**redirects to login if not logged in */
  if (!user) return <Navigate to="/login" />;

  /**
   * Function to pass down to form
   * Filters job search by title
   * Sets array of jobs to GET request results
   * @param {Object} formData
   */
  async function titleSearch(formData) {
    const jobs = await JoblyApi.getJobs(formData);
    setPageState(oldData => ({ ...oldData, jobs }));
  }
  //TODO: try catch errors

  if (pageState.isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <SearchForm searchFunction={titleSearch} term="title" />
      {pageState.jobs.length === 0 ?
       <h2>No Jobs Found</h2> :
       <JobList jobs={pageState.jobs}/>}
    </div>
  );
}
export default JobsPage;