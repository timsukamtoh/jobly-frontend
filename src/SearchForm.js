import React, { useState } from 'react';

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
    <form class="form-inline container" onSubmit={handleSubmit}>
      <input class="form-control mr-sm-2"
        name={term}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0">Submit</button>
    </form>
  );
}

export default SearchForm;