import React from 'react';
import { Link } from "react-router-dom";
import "./CompanyCard.css";
/**
 * Component for rendering Company Card
 * contains name, description, logo
 *
 * Props:
 * - company : object
 *
 * CompanyDetailsPage -> CompanyCard
 */
function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      <Link >
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <img src={company.logoUrl}/>
      </Link>
    </div>

  );
}

export default CompanyCard;