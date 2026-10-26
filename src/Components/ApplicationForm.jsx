import React from "react";
import JobList from "./JobList";
const ApplicationForm = ({ handleChange, handleSubmit, formData, errors }) => {
  return (
    <>
      <div className="application-container">
        <form className="jt-panel jt-form">
          <div className="jt-form-head">
            <h2>Add New Application</h2>
            <p>Enter the details of your latest job application</p>
          </div>
          <div className="jt-form-grid">
            <div className="jt-field">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="e.g. Google, Microsoft, Startup Inc."
                onChange={handleChange}
                value={formData.company}
                className={errors.company ? "jt-input-error" : ""}
              />
              {errors.company && (
                <span className="jt-field-error">Company is required </span>
              )}
            </div>
            <div className="jt-field">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g. Software Engineer, Product Manager"
                onChange={handleChange}
                value={formData.jobTitle}
                className={errors.jobTitle ? "jt-input-error" : ""}
              />
              {errors.jobTitle && (
                <span className="jt-field-error">Job Title is required </span>
              )}
            </div>
            <div className="jt-field">
              <label htmlFor="salary">Salary Range</label>
              <input
                type="number"
                id="salary"
                name="salary"
                placeholder="e.g. $80,000 - $120,000"
                onChange={handleChange}
                value={formData.salary}
                className={errors.salary ? "jt-input-error" : ""}
              />
              {errors.salary && (
                <span className="jt-field-error">Salary is required </span>
              )}
            </div>
            <div className="jt-field">
              <label htmlFor="AppliedAt">Date Applied</label>
              <input
                type="date"
                id="AppliedAt"
                name="AppliedAt"
                onChange={handleChange}
                value={formData.AppliedAt}
                className={errors.AppliedAt ? "jt-input-error" : ""}
              />
              {errors.AppliedAt && (
                <span className="jt-field-error">Date is required </span>
              )}
            </div>
            <div className="jt-field jt-submit">
              <button className="jt-btn-primary" onClick={handleSubmit}>
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
