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
    <div className="JobCard text-start ms-3">
      <h3 className="ms-3 mt-3 mb-3">{job.title}</h3>
      <h6 className="ms-3 mb-2">Company: {job.companyHandle}</h6>
      <p className="ms-3 mb-2">Salary: {job.salary}</p>
      <p className="ms-3 mb-2">Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;