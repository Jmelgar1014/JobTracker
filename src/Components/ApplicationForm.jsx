import React from "react";
import JobList from "./JobList";
const ApplicationForm = ({ handleChange, handleSubmit, formData, errors }) => {
  return (
    <>
      <div className="application-container">
        <form className="application-form">
          <div className="form-description">
            <h2>Add New Application</h2>
            <p>Enter the details of your latest job application</p>
          </div>
          <div className="form-inputs">
            <div className="input-container">
              <div className="input-items">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="  e.g. Google, Microsoft, Startup Inc."
                  onChange={handleChange}
                  value={formData.company}
                  className={errors.company ? "input-errors" : ""}
                />
                {errors.company && (
                  <span className="error-message">Company is required </span>
                )}
              </div>
              <div className="input-items">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="  e.g. Software Engineer, Product Manager"
                  onChange={handleChange}
                  value={formData.jobTitle}
                  className={errors.jobTitle ? "input-errors" : ""}
                />
                {errors.jobTitle && (
                  <span className="error-message">Job Title is required </span>
                )}
              </div>
            </div>
            <div className="input-container">
              <div className="input-items">
                <label htmlFor="salary">Salary Range</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  placeholder="  e.g. $80,000 - $120,000"
                  onChange={handleChange}
                  value={formData.salary}
                  className={errors.salary ? "input-errors" : ""}
                />
                {errors.salary && (
                  <span className="error-message">Salary is required </span>
                )}
              </div>
              <div className="input-items">
                <label htmlFor="AppliedAt">Date Applied</label>
                <input
                  type="date"
                  id="AppliedAt"
                  name="AppliedAt"
                  onChange={handleChange}
                  value={formData.AppliedAt}
                  className={errors.AppliedAt ? "input-errors" : ""}
                />
                {errors.AppliedAt && (
                  <span className="error-message">Date is required </span>
                )}
              </div>
            </div>
            <div className="btn-container">
              <button className="btn" onClick={handleSubmit}>
                Add Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationForm;
