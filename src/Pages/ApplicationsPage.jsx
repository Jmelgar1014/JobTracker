import React from "react";
import NavBar from "../Components/NavBar";
import { ApplicationTitle } from "../Components/ApplicationTitle";
import ApplicationForm from "../Components/ApplicationForm";
import JobList from "../Components/JobList";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import TotalCounts from "../Components/TotalCounts";

const ApplicationsPage = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    salary: "",
    AppliedAt: "",
    status: "Applied",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredField = ["company", "salary", "jobTitle", "AppliedAt"];

    requiredField.forEach((item) => {
      if (!formData[item] || formData[item].trim() === "") {
        newErrors[item] = true;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const token = session?.access_token; // Available globally

      if (!token) {
        console.log("no valid token");
      }

      const response = await fetch(
        "https://jobtrackerapi.fly.dev/api/jobapplication",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(token);
      setJobs(data);
      console.log(data);
      console.log("above is the jobs var");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleStatusChange = async (index, newStatus, itemId) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const token = session?.access_token; // Available globally

      if (!token) {
        console.log("no valid token");
      }
      const updatedJobs = [...jobs];
      updatedJobs[index].status = newStatus;
      setJobs(updatedJobs);

      console.log(updatedJobs[index]);

      await fetch(
        `https://jobtrackerapi.fly.dev/api/jobapplication/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newStatus),
        }
      );
      console.log(newStatus);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (itemId) => {
    console.log("I have been pressed");
    setLoading(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const token = session?.access_token; // Available globally

      if (!token) {
        console.log("no valid token");
      }
      await fetch(
        `https://jobtrackerapi.fly.dev/api/jobapplication/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchJobs();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NavBar />
      <TotalCounts count={jobs} />
      {loading ? (
        <Spinner />
      ) : jobs.length > 0 ? (
        <JobList
          jobs={jobs}
          handleStatusChange={handleStatusChange}
          deleteJob={deleteJob}
        />
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default ApplicationsPage;
