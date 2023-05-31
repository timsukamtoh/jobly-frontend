import React, { useState, useEffect } from "react";
import "./JobCard.css"
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
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>{job.companyHandle}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;