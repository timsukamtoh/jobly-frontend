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
function SearchForm({ getSearchTerm }) {
  const [formData, setFormData] = useState({});

  /**
   * Function to save formData whenever input is updated
   * formData like: { search : value }
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    getSearchTerm(formData);
    setFormData({});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;