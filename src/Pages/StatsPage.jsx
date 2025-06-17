import React from "react";
import DashboardTitle from "../Components/DashboardTitle";
import { useJob } from "../Hooks/useJob";
import Stat from "../Components/Stat";
import PendingIcon from "../Components/PendingIcon";
import OffierIcon from "../Components/OffierIcon";
import InterviewIcon from "../Components/InterviewIcon";
import AppIcon from "../Components/AppIcon";
import Metrics from "../Components/Metrics";
import InterviewPercentage from "../Components/InterviewPercentage";
import OfferPercentage from "../Components/OfferPercentage";
import SuccessPercentage from "../Components/SuccessPercentage";

const StatsPage = () => {
  const { jobs } = useJob();

  const interviewPercentage =
    (jobs.filter((item) => item.status == "interview").length / jobs.length) *
    100;
  const interviewCount = jobs.filter(
    (item) => item.status == "interview"
  ).length;

  const offerPercentage =
    (jobs.filter((item) => item.status == "offer").length / jobs.length) * 100;

  const offerCount = jobs.filter((item) => item.status == "offer").length;

  // const rejectPercentage =
  //   (jobs.filter((item) => item.status == "rejected").length / jobs.length) *
  //   100;

  // const noResponseRate =
  //   (jobs.filter((item) => item.status == "applied").length / jobs.length) *
  //   100;

  const successPercentage = interviewPercentage + offerPercentage;

  const successCount = interviewCount + offerCount;

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
            jobs={jobs.filter((item) => item.status == "applied").length}
            statName="Pending"
            statDesc="Applications awaiting response"
          >
            <PendingIcon />
          </Stat>
        </div>
      </div>
      <Metrics>
        <InterviewPercentage
          percentage={interviewPercentage.toFixed(1)}
          count={interviewCount}
          jobs={jobs.length}
        />
        <OfferPercentage
          percentage={offerPercentage.toFixed(1)}
          count={offerCount}
          jobs={jobs.length}
        />
        <SuccessPercentage
          percentage={successPercentage.toFixed(1)}
          count={successCount}
          jobs={jobs.length}
        />
      </Metrics>
    </>
  );
};

export default StatsPage;
