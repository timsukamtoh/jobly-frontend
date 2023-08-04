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
    <div className="my-3 p-3 bg-secondary bg-opacity-75 w-75 rounded">
      <Link to={`/companies/${company.handle}`} className="text-white text-start text-decoration-none">
        <div className = "company-card">
            <div>
                <img className="rounded" src={company.logoUrl}/>
            </div>
            <div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
            </div>

        </div>

      </Link>
    </div>

  );
}

export default CompanyCard;