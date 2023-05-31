import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

/**
 * Component for rendering JobsList
 *
 * Props:
 * - jobs : array of job objects like [{id, title, companyHandle, salary, equity},{..}]
 *
 * {JobsPage, CompanyDetailsPage} -> JobsList -> JobCard
 */
function JobList({ jobs }) {

  if (!jobs) return <h1>Loading...</h1>;

  return (
    <div>
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobList;