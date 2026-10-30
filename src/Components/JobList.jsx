import React, { useState } from "react";
import DropDown from "./DropDown";
import TabList from "./TabList";
import { Link } from "react-router-dom";

const JobList = ({ jobs, handleStatusChange, deleteJob }) => {
  const [filterTab, setFilterTab] = useState("all");

  const filteredJobs =
    filterTab === "all" ? jobs : jobs.filter((job) => job.status === filterTab);

  return (
    <>
      <div className="container ">
        <section className="jt-panel">
          <div className="jt-list-head">
            <h2>Applications</h2>
            <TabList filterTab={filterTab} setFilterTab={setFilterTab} />
          </div>
          <div className="jt-table-wrap">
            <table className="jt-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th className="jt-num">Salary</th>
                  <th>Applied</th>
                  <th>Job Description</th>
                  <th>Status</th>
                  <th>
                    <span className="jt-sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="jt-c-company">
                        <div className="jt-company">
                          <span className="jt-logo" aria-hidden="true">
                            {index + 1}
                          </span>
                          <span className="jt-company-name">
                            {item.company}
                          </span>
                        </div>
                      </td>
                      <td className="jt-c-role jt-role">{item.jobTitle}</td>
                      <td className="jt-c-salary jt-num jt-mono">
                        ${item.salary}
                      </td>
                      <td className="jt-c-date jt-mono">
                        {item.appliedAt.slice(0, 10)}
                      </td>
                      <td className="jt-c-salary jt-mono">
                        <Link
                          to={`/applications/${item.id}`}
                          className="jt-view-pill"
                        >
                          View Details
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6 3.5 10.5 8 6 12.5" />
                          </svg>
                        </Link>
                      </td>
                      <td
                        className="jt-c-status jt-status"
                        data-s={item.status}
                      >
                        <DropDown
                          status={item.status}
                          onChange={(e) =>
                            handleStatusChange(e.target.value, item.id)
                          }
                        />
                      </td>
                      <td className="jt-c-actions jt-num">
                        <button
                          key={item.id}
                          className="jt-icon-btn"
                          aria-label={`Delete ${item.company} application`}
                          onClick={() => deleteJob(item.id)}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4M6.8 7v4M9.2 7v4" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobList;
