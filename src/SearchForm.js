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
    <form onSubmit={handleSubmit}>
      <input
        name={term}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;