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
  const { dataStats = {} } = useJob();

  const interviewPercentage =
    (dataStats.total ?? 0) ? (dataStats.interviews / dataStats.total) * 100 : 0;
  const interviewCount = dataStats.interviews ?? 0;

  const offerPercentage = dataStats.total
    ? (dataStats.offers / dataStats.total) * 100
    : 0;

  const offerCount = dataStats.offers ?? 0;

  const successPercentage = interviewPercentage + offerPercentage;

  const successCount = interviewCount + offerCount;

  return (
    <>
      <DashboardTitle />
      <div className="count-container">
        <div className="jt-cards">
          <Stat
            statDesc="All submitted job applications"
            jobs={dataStats.total ?? 0}
            statName="Total Applications"
          >
            <AppIcon />
          </Stat>
          <Stat
            jobs={dataStats.interviews ?? 0}
            statName="Interviews"
            statDesc="Applications that led to interviews"
          >
            <InterviewIcon />
          </Stat>
          <Stat
            jobs={dataStats.offers ?? 0}
            statName="Offers"
            statDesc="Applications that results in job offers"
          >
            <OffierIcon />
          </Stat>
          <Stat
            jobs={dataStats.applied ?? 0}
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
          jobs={dataStats.total ?? 0}
        />
        <OfferPercentage
          percentage={offerPercentage.toFixed(1)}
          count={offerCount}
          jobs={dataStats.total ?? 0}
        />
        <SuccessPercentage
          percentage={successPercentage.toFixed(1)}
          count={successCount}
          jobs={dataStats.total ?? 0}
        />
      </Metrics>
    </>
  );
};

export default StatsPage;
