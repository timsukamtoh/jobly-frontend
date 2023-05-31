import React, { useState } from "react";
import { useParams } from 'react-router-dom';

/**
 * Component for Company Details Page
 *
 * State:
 * - company : object
 *
 * RoutesList -> CompanyDetailsPage -> JobsList
 */
function CompanyDetailsPage() {
  const { handle } = useParams();

  return(
    <div>
      <h1>{handle} company</h1>
    </div>
  )
}

export default CompanyDetailsPage;