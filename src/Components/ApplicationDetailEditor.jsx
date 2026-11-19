import React, { useState } from "react";

export const ApplicationDetailEditor = ({
  initialDetails,
  setEdit,
  onSave,
  saving,
  saveError,
}) => {
  const originalDate = initialDetails.appliedAt.slice(0, 10);

  const [fields, setFields] = useState({
    salary: initialDetails.salary,
    appliedAt: originalDate,
    location: initialDetails.location ?? "",
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    // only replace the date if it was changed (and isn't empty),
    // so the original time of day is kept
    const dateChanged = fields.appliedAt && fields.appliedAt !== originalDate;

    onSave({
      ...fields,
      appliedAt: dateChanged
        ? new Date(fields.appliedAt).toISOString()
        : initialDetails.appliedAt,
    });
  };

  return (
    <>
      <dl className="jt-d-facts jt-d-facts-edit">
        <div className="jt-d-fact">
          <dt>Salary</dt>
          <dd className="jt-mono">
            <input
              className="jt-d-input"
              type="text"
              name="salary"
              aria-label="Salary"
              value={fields.salary}
              onChange={handleChange}
            />
          </dd>
        </div>
        <div className="jt-d-fact">
          <dt>Applied</dt>
          <dd className="jt-mono">
            <input
              className="jt-d-input"
              type="date"
              name="appliedAt"
              aria-label="Applied date"
              value={fields.appliedAt}
              onChange={handleChange}
            />
          </dd>
        </div>
        <div className="jt-d-fact">
          <dt>Location</dt>
          <dd>
            <input
              className="jt-d-input"
              type="text"
              name="location"
              aria-label="Location"
              value={fields.location}
              onChange={handleChange}
            />
          </dd>
        </div>
      </dl>

      <div className="jt-d-sec-body jt-d-editor">
        {saveError && (
          <p className="jt-d-hint" role="alert">
            Couldn't save changes. Try again.
          </p>
        )}

        <div className="jt-d-editor-foot">
          <div className="jt-d-sec-actions">
            <button
              className="jt-d-btn jt-d-btn-quiet"
              type="button"
              onClick={() => setEdit(null)}
            >
              Cancel
            </button>
            <button
              className="jt-d-btn jt-d-btn-primary"
              type="button"
              disabled={saving}
              onClick={handleSave}
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
