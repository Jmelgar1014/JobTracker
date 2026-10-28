import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { JobContext } from "./JobContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL ?? "https://jobtrackerapi.fly.dev";
export const JobProvider = ({ children }) => {
  const today = () => {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${d.getFullYear()}-${month}-${day}`;
  };
  const { token, user } = useAuth();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    salary: "",
    AppliedAt: today(),
    status: "applied",
    jobDescription: "",
    userId: "",
  });

  const { data: jobs = [], isLoading: loading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/jobapplication`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.json();
    },
    enabled: !!token,
  });

  const recentJobs = jobs.slice(0, 10);

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

  const updateJobStatus = useMutation({
    mutationFn: async ({ id, status }) =>
      fetch(`${API_URL}/api/jobapplication/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      }),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", String(id)] });
    },
  });

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

  const addJob = useMutation({
    mutationFn: async (newJob) => {
      await fetch(`${API_URL}/api/jobapplication`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      // return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jobs"] }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = { ...formData, userId: user.id };
    await addJob.mutateAsync(payload);
    setFormData({
      company: "",
      jobTitle: "",
      salary: "",
      AppliedAt: today(),
      jobDescription: "",
      status: "applied",
    });
  };

  const handleStatusChange = async (newStatus, itemId) => {
    await updateJobStatus.mutateAsync({ id: itemId, status: newStatus });
  };

  const deleteJob = useMutation({
    mutationFn: async (itemId) => {
      await fetch(`${API_URL}/api/jobapplication/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (_, itemId) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.removeQueries({ queryKey: ["job", String(itemId)] });
    },
  });

  return (
    <JobContext.Provider
      value={{
        loading,
        jobs,
        errors,
        formData,
        handleChange,
        handleSubmit,
        handleStatusChange,
        deleteJob: (id) => deleteJob.mutate(id),
        recentJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export { API_URL };
