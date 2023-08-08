import React, { useState } from 'react';

import "./SearchForm.css"
/**
 * Component for search form on jobs and companies page
 *
 * Props:
 * - handleSubmit : function
 *
 * State:
 * - formData : object
 *
 * {CompaniesPage, JobsPage} -> SearchForm
 */
function SearchForm({ searchFunction, term }) {
  const [formData, setFormData] = useState({});

  /**
   * Function to save formData whenever input is updated
   * formData like: { search : value }
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ [name]: value });
  }

  /** Submits form information and calls handleFunction from parent component */
  function handleSubmit(evt) {
    evt.preventDefault();
    searchFunction(formData);
  }

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input className="form-control rounded"
        name={term}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button className="btn text-white bg-secondary btn-outline-success my-2 my-sm-0">Submit</button>
    </form>
  );
}

export default SearchForm;
