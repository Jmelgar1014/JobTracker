import React from "react";
import DashboardTitle from "../Components/DashboardTitle";
import TotalCounts from "../Components/TotalCounts";
import { useJob } from "../Context/JobContext";
import Stat from "../Components/Stat";
import PendingIcon from "../Components/PendingIcon";
import OffierIcon from "../Components/OffierIcon";
import InterviewIcon from "../Components/InterviewIcon";
import AppIcon from "../Components/AppIcon";

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
    (jobs.filter((item) => item.status == "Applied").length / jobs.length) *
    100;

  return (
    <>
      <DashboardTitle />
      <div className="count-container">
        <div className="dashboard-container">
          <Stat
            statDesc="All submitted job applications"
            jobs={jobs.length}
            statName="Total Applications"
          >
            <AppIcon />
          </Stat>
          <Stat
            jobs={jobs.filter((item) => item.status == "interview").length}
            statName="Interviews"
            statDesc="Applications that led to interviews"
          >
            <InterviewIcon />
          </Stat>
          <Stat
            jobs={jobs.filter((item) => item.status == "offer").length}
            statName="Offers"
            statDesc="Applications that results in job offers"
          >
            <OffierIcon />
          </Stat>
          <Stat
            jobs={jobs.filter((item) => item.status == "Applied").length}
            statName="Pending"
            statDesc="Applications awaiting response"
          >
            <PendingIcon />
          </Stat>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
