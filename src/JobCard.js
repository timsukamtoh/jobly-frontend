import React from "react";
/**
 * Component for rendering JobCard
 *
 * Props:
 * - job : object containing {id, title, companyHandle, salary, equity}
 *
 * JobList -> JobCard
 */
function JobCard({job}){
  return(
    <div className="JobCard text-white text-start my-3 p-3 bg-secondary bg-opacity-75 w-75 rounded">
      <h3>{job.title}</h3>
      <h6>Company: {job.companyHandle}</h6>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;