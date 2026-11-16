import React from "react";
import { ApplicationDetailEditor } from "./ApplicationDetailEditor";

export const ApplicationDetails = ({
  job,
  detailEdit,
  setEdit,
  onSave,
  saving,
  saveError,
}) => {
  if (detailEdit === "details") {
    return (
      <ApplicationDetailEditor
        initialDetails={job}
        setEdit={setEdit}
        onSave={onSave}
        saving={saving}
        saveError={saveError}
      />
    );
  }
  return (
    <dl className="jt-d-facts">
      <div className="jt-d-fact">
        <dt>Salary</dt>
        <dd className="jt-mono">${job.salary}</dd>
      </div>
      <div className="jt-d-fact">
        <dt>Applied</dt>
        <dd>
          <span className="jt-mono">{job.appliedAt.slice(0, 10)}</span>
        </dd>
      </div>
      <div className="jt-d-fact">
        <dt>Location</dt>
        <dd>{job.location}</dd>
      </div>
    </dl>
  );
};
