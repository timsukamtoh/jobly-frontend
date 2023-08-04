import React, { useState, useEffect } from "react";

import JobList from "./JobList";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

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

  /** Gets and loads all jobs on mount */
  useEffect(function () {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setPageState({ isLoading: false, jobs });
    }
    getJobs();
  }, []);

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
    <div className="p-3 bg-primary pt-5 text-dark bg-opacity-25 d-flex flex-column align-items-center">
      <SearchForm searchFunction={titleSearch} term="title" />
      {pageState.jobs.length === 0 ?
       <h2>No Jobs Found</h2> :
       <JobList jobs={pageState.jobs}/>}
    </div>
  );
}
export default JobsPage;