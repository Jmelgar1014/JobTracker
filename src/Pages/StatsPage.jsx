import React from "react";
import DashboardTitle from "../Components/DashboardTitle";
import TotalCounts from "../Components/TotalCounts";
import { useJob } from "../Context/JobContext";
import Stat from "../Components/Stat";

const StatsPage = () => {
  const { jobs } = useJob();

  const interviewPercentage =
    (jobs.filter((item) => item.status == "interview").length / jobs.length) *
    100;

  const offerPercentage =
    (jobs.filter((item) => item.status == "offer").length / jobs.length) * 100;

  const rejectPercentage =
    (jobs.filter((item) => item.status == "rejected").length / jobs.length) *
    100;

  const noResponseRate =
    (jobs.filter((item) => item.status == "applied").length / jobs.length) *
    100;
  return (
    <>
      <DashboardTitle />
      <TotalCounts count={jobs} />
      <div className="count-container">
        <div className="dashboard-container">
          <Stat
            percentageName="Interview Rate"
            percentage={interviewPercentage.toFixed(0)}
          />
          <Stat
            percentageName="Offer Rate"
            percentage={offerPercentage.toFixed(0)}
          />
          <Stat
            percentageName="Rejected Rate"
            percentage={rejectPercentage.toFixed(0)}
          />
          <Stat
            percentageName="No Response Rate"
            percentage={noResponseRate.toFixed(0)}
          />
        </div>
      </div>
    </>
  );
};

export default StatsPage;
