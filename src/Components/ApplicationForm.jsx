import React from "react";
import JobList from "./JobList";
const ApplicationForm = ({ handleChange, handleSubmit, formData }) => {
  // const [formData, setFormData] = useState({
  //   company: "",
  //   jobTitle: "",
  //   salary: "",
  //   AppliedAt: "",
  //   status: "Applied",
  //   userId: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();

  //     const token = session?.access_token; // Available globally
  //     if (!session || !token) {
  //       console.error("No active session");
  //       return;
  //     }

  //     formData.userId = session.user.id;

  //     const response = await fetch("http://localhost:5195/api/jobapplication", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("request success");
  //     } else {
  //       console.log("request failed");
  //     }

  //     setFormData({
  //       company: "",
  //       jobTitle: "",
  //       salary: "",
  //       AppliedAt: "",
  //       status: "Applied",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("success");
  //   }

  //   console.log("form submitted:", formData);
  // };

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
                  onChange={handleChange}
                  value={formData.company}
                />
              </div>
              <div className="input-items">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={handleChange}
                  value={formData.jobTitle}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-items">
                <label htmlFor="salary">Salary Range</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  onChange={handleChange}
                  value={formData.salary}
                />
              </div>
              <div className="input-items">
                <label htmlFor="AppliedAt">Date Applied</label>
                <input
                  type="date"
                  id="AppliedAt"
                  name="AppliedAt"
                  onChange={handleChange}
                  value={formData.AppliedAt}
                />
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
