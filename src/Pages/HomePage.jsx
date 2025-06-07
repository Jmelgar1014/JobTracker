import React from "react";
import NavBar from "../Components/NavBar";
import { ApplicationTitle } from "../Components/ApplicationTitle";
import ApplicationForm from "../Components/ApplicationForm";
import JobList from "../Components/JobList";
import SignOut from "../Components/SignOut";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import ApplicationCount from "../Components/ApplicationCount";
import InterviewCount from "../Components/InterviewCount";
import OfferCount from "../Components/OfferCount";
import TotalCounts from "../Components/TotalCounts";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const token = session?.access_token; // Available globally
      if (!session || !token) {
        console.error("No active session");
        return;
      }

      formData.userId = session.user.id;

      const response = await fetch("http://localhost:5195/api/jobapplication", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("request success");
      } else {
        console.log("request failed");
      }

      setFormData({
        company: "",
        jobTitle: "",
        salary: "",
        AppliedAt: "",
        status: "Applied",
      });
      fetchJobs();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("success");
    }

    console.log("form submitted:", formData);
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

      const response = await fetch("http://localhost:5195/api/jobapplication", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(token);
      setJobs(data);
      console.log(data);
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

      await fetch(`http://localhost:5195/api/jobapplication/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newStatus),
      });
      console.log(newStatus);
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
      await fetch(`http://localhost:5195/api/jobapplication/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      <ApplicationTitle />
      <ApplicationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
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
      {/* {} */}
    </>
  );
};

export default HomePage;
