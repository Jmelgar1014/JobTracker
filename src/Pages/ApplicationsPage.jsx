import React from "react";
import NavBar from "../Components/NavBar";
import JobList from "../Components/JobList";
import EmptyList from "../Components/EmptyList";
import Spinner from "../Components/Spinner";
import TotalCounts from "../Components/TotalCounts";
import { useJob } from "../Hooks/useJob";
import TotalCountTitle from "../Components/TotalCountTitle";
import TabList from "../Components/TabList";
import Pagination from "../Components/Pagination";

const ApplicationsPage = () => {
  const { loading, data, deleteJob, handleStatusChange, tabChange, filterTab } =
    useJob();
  return (
    <>
      <TotalCountTitle />
      <TotalCounts count={data?.items} />
      <div className="jt-toolbar">
        <TabList tabChange={tabChange} filterTab={filterTab} />
      </div>
      {loading ? (
        <Spinner />
      ) : data?.items?.length > 0 ? (
        <JobList
          jobs={data.items}
          handleStatusChange={handleStatusChange}
          deleteJob={deleteJob}
        />
      ) : (
        <EmptyList />
      )}
      <Pagination jobs={data} />
    </>
  );
};

export default ApplicationsPage;
