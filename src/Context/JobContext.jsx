import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const { token, user } = useAuth();
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

  console.log(token);
  const recentJobs = jobs.slice(0, 10);
  console.log(recentJobs.length);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("all inputs need to be entered");
      return;
    }

    try {
      // const {
      //   data: { session },
      // } = await supabase.auth.getSession();

      // const token = session?.access_token; // Available globally
      // if (!session || !token) {
      //   console.error("No active session");
      //   return;
      // }

      formData.userId = user.id;

      const response = await fetch(
        "https://jobtrackerapi.fly.dev/api/jobapplication",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
    if (!token) {
      console.log("No token available, skipping fetch");
      return;
    }
    setLoading(true);
    try {
      // const {
      //   data: { session },
      // } = await supabase.auth.getSession();

      // const token = session?.access_token; // Available globally

      // if (!token) {
      //   console.log("no valid token");
      // }

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
    if (token) {
      fetchJobs();
    }
  }, [token]);

  const handleStatusChange = async (index, newStatus, itemId) => {
    try {
      // const {
      //   data: { session },
      // } = await supabase.auth.getSession();

      // const token = session?.access_token; // Available globally

      // if (!token) {
      //   console.log("no valid token");
      // }
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
      // const {
      //   data: { session },
      // } = await supabase.auth.getSession();

      // const token = session?.access_token; // Available globally

      // if (!token) {
      //   console.log("no valid token");
      // }
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
    <JobContext.Provider
      value={{
        loading,
        jobs,
        errors,
        formData,
        handleChange,
        handleSubmit,
        fetchJobs,
        handleStatusChange,
        deleteJob,
        recentJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
