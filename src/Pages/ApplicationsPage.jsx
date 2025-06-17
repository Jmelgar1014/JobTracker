import React from "react";
import NavBar from "../Components/NavBar";
import JobList from "../Components/JobList";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import TotalCounts from "../Components/TotalCounts";
import { useJob } from "../Hooks/useJob";
import TotalCountTitle from "../Components/TotalCountTitle";

const ApplicationsPage = () => {
  const { loading, jobs, deleteJob, handleStatusChange } = useJob();
  return (
    <>
      <TotalCountTitle />
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
