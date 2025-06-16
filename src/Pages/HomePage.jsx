import React from "react";
import NavBar from "../Components/NavBar";
import { ApplicationTitle } from "../Components/ApplicationTitle";
import ApplicationForm from "../Components/ApplicationForm";
import JobList from "../Components/JobList";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import TotalCounts from "../Components/TotalCounts";
import { useJob } from "../Hooks/useJob";

const HomePage = () => {
  const {
    loading,
    jobs,
    errors,
    formData,
    handleChange,
    handleSubmit,
    handleStatusChange,
    deleteJob,
    recentJobs,
  } = useJob();

  return (
    <>
      <ApplicationTitle />
      <ApplicationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        errors={errors}
      />
      <TotalCounts count={jobs} />
      {loading ? (
        <Spinner />
      ) : jobs.length > 0 ? (
        <JobList
          jobs={recentJobs}
          handleStatusChange={handleStatusChange}
          deleteJob={deleteJob}
        />
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default HomePage;
