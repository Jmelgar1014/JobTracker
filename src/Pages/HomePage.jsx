import React from "react";
import NavBar from "../Components/NavBar";
import { ApplicationTitle } from "../Components/ApplicationTitle";
import ApplicationForm from "../Components/ApplicationForm";
import JobList from "../Components/JobList";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import MinimalCount from "../Components/MinimalCount";
import { useJob } from "../Hooks/useJob";
import TabList from "../Components/TabList";

const HomePage = () => {
  const {
    loading,
    data,
    errors,
    formData,
    handleChange,
    handleSubmit,
    handleStatusChange,
    deleteJob,
    recentJobs,
    submitLoading,
    tabChange,
    filterTab,
  } = useJob();

  return (
    <>
      <ApplicationTitle />
      <ApplicationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        errors={errors}
        submitLoading={submitLoading}
      />
      <MinimalCount count={data} />
      <div className="jt-toolbar">
        <TabList tabChange={tabChange} filterTab={filterTab} />
      </div>
      {loading ? (
        <Spinner />
      ) : data?.items?.length > 0 ? (
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
