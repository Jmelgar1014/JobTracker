import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../Context/JobProvider";
import { useAuth } from "../Hooks/useAuth";
import Spinner from "../Components/Spinner";

// Markup and styles only; sample values below are placeholders to swap for real data.
const ApplicationPage = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const {
    data: job,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/jobapplication/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Job not found");

      return response.json();
    },
    enabled: !!token,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>Job not found</p>;
  return (
    <>
      <div className="jt-detail">
        <nav className="jt-d-crumbs" aria-label="Breadcrumb">
          <Link to="/applications">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 3.5 5.5 8l4.5 4.5" />
            </svg>
            Applications
          </Link>
          <span>/</span>
          <span>{job.company}</span>
        </nav>

        <section className="jt-panel jt-d-hero" aria-labelledby="jt-d-role">
          <div className="jt-d-hero-top">
            <span className="jt-d-logo" aria-hidden="true">
              NL
            </span>
            <div className="jt-d-hero-id">
              <p className="jt-d-company">{job.company}</p>
              <h1 id="jt-d-role">{job.jobTitle}</h1>
              <div className="jt-d-chips"></div>
            </div>
            <div className="jt-d-hero-actions">
              {/* data-s takes the lowercase status, like the table's status pill */}
              <div className="jt-status jt-d-status" data-s="interview">
                <select name="status" aria-label="Application status">
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <div className="jt-d-layout">
          <section className="jt-panel" aria-labelledby="jt-d-jd-h">
            <div className="jt-d-sec-head">
              <h2 id="jt-d-jd-h">Job description</h2>
              <div className="jt-d-sec-actions">
                <button className="jt-d-btn jt-d-btn-quiet" type="button">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" />
                    <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
                  </svg>
                  Copy
                </button>
                <button className="jt-d-btn" type="button">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M11 2.5 13.5 5 6 12.5H3.5V10Z" />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
            {/* Empty state: shown when there is no description */}
            <div className="jt-d-sec-body">
              <div className="jt-d-jd">{job.jobDescription}</div>
            </div>

            {/* Edit state: shown while editing the description */}
          </section>

          <aside className="jt-d-side">
            <section className="jt-panel" aria-labelledby="jt-d-details-h">
              <div className="jt-d-sec-head">
                <h2 id="jt-d-details-h">Details</h2>
              </div>
              <dl className="jt-d-facts">
                <div className="jt-d-fact">
                  <dt>Salary</dt>
                  <dd className="jt-mono">{job.salary}</dd>
                </div>
                <div className="jt-d-fact">
                  <dt>Applied</dt>
                  <dd>
                    <span className="jt-mono">{job.appliedAt}</span>
                  </dd>
                </div>
                <div className="jt-d-fact">
                  <dt>Location</dt>
                  <dd>Remote (US)</dd>
                </div>
                <div className="jt-d-fact">
                  <dt>Source</dt>
                  <dd>LinkedIn</dd>
                </div>
              </dl>
            </section>

            <section className="jt-panel" aria-labelledby="jt-d-notes-h">
              <div className="jt-d-sec-head">
                <h2 id="jt-d-notes-h">Notes</h2>
                <span className="jt-d-saved">Saved</span>
              </div>
              <div className="jt-d-sec-body">
                <textarea
                  className="jt-d-textarea jt-d-notes"
                  aria-labelledby="jt-d-notes-h"
                  placeholder="Interviewer names, questions to ask, follow-up dates…"
                />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ApplicationPage;
