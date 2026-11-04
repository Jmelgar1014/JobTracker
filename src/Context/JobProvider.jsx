import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { JobContext } from "./JobContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL ?? "https://jobtrackerapi.fly.dev";
export const JobProvider = ({ children }) => {
  const today = () => {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${d.getFullYear()}-${month}-${day}`;
  };

  const pageSize = 20;
  const { token, user } = useAuth();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState({});
  const [filterTab, setFilterTab] = useState("all");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    salary: "",
    AppliedAt: today(),
    status: "applied",
    jobDescription: "",
    userId: "",
    location: "",
  });

  const filterTabParam = filterTab === "all" ? "" : `&status=${filterTab}`;

  const { data, isLoading: loading } = useQuery({
    queryKey: ["jobs", page, pageSize, filterTab],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL}/api/jobapplication?page=${page}&pageSize=${pageSize}${filterTabParam}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error(`Failed to load jobs (${response.status})`);
      }

      return response.json();
    },
    enabled: !!token,
    placeholderData: keepPreviousData,
  });

  const recentJobs = data?.items.slice(0, 10) ?? [];

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
    mutationFn: async ({ id, status }) => {
      const response = await fetch(`${API_URL}/api/jobapplication/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
      if (!response.ok) {
        throw new Error(`Failed to update status (${response.status})`);
      }
    },
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
      const res = await fetch(`${API_URL}/api/jobapplication`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) throw new Error("Failed to add job");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jobs"] }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const [year, month, day] = formData.AppliedAt.split("-").map(Number);
      const appliedAt = new Date();

      appliedAt.setFullYear(year, month - 1, day);
      const payload = {
        ...formData,
        appliedAt: appliedAt.toISOString(),
        userId: user.id,
      };

      await addJob.mutateAsync(payload);
      setFormData({
        company: "",
        jobTitle: "",
        salary: "",
        AppliedAt: today(),
        jobDescription: "",
        status: "applied",
        location: "",
      });
    } catch (e) {
      console.log(e);
    }
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

  const tabChange = (tab) => {
    setFilterTab(tab);
    setPage(1);
  };
  return (
    <JobContext.Provider
      value={{
        loading,
        data,
        errors,
        formData,
        handleChange,
        handleSubmit,
        handleStatusChange,
        deleteJob: (id) => deleteJob.mutate(id),
        recentJobs,
        submitLoading: addJob.isPending,
        setPage,
        filterTab,
        setFilterTab,
        tabChange,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export { API_URL };
