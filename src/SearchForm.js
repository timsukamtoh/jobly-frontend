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
    <form class="xl-w-50 input-group" onSubmit={handleSubmit}>
      <input class="form-control rounded"
        name={term}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button className="btn text-white bg-secondary btn-outline-success my-2 my-sm-0">Submit</button>
    </form>
  );
}

export default SearchForm;

{/* <div className="input-group mx-auto m-3 ">
</div>

<div className="form-group-append">
className = "form-control mt-3"
        <div className="w-50"></div>
        </div>
className="btn btn-outline-secondary"
</div> */}