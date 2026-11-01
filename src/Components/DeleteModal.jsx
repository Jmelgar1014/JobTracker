import React, { useEffect, useRef } from "react";

// Markup and styles only; sample values below are placeholders to swap for real data.
const DeleteModal = ({ isOpen, job, onConfirm, onCancel }) => {
  const modalControl = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalControl.current.showModal();
    }
    if (!isOpen) {
      modalControl.current.close();
    }
  }, [isOpen]);
  return (
    <>
      <dialog
        ref={modalControl}
        className="jt-modal"
        aria-labelledby="jt-modal-title"
        aria-describedby="jt-modal-desc"
        onClose={onCancel}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onCancel();
          }
        }}
      >
        <div className="jt-modal-body">
          <div className="jt-modal-head">
            <span className="jt-modal-icon" aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 5.5h13M8 5.5V3.5h4v2M5.5 5.5l.8 11h7.4l.8-11M8.5 9v4.5M11.5 9v4.5" />
              </svg>
            </span>
            <div>
              <h2 id="jt-modal-title">Delete this application?</h2>
              <p id="jt-modal-desc">
                This removes the application from your tracker. This can't be
                undone.
              </p>
            </div>
          </div>

          <div className="jt-modal-app">
            <span className="jt-logo" aria-hidden="true">
              {job?.company[0]}
            </span>
            <span className="jt-modal-who">
              <b>{job?.company}</b>
              <span>{job?.jobTitle}</span>
            </span>
            {/* data-s takes the lowercase status, like the table's status pill */}
            <span className="jt-modal-pill" data-s={job?.status}>
              {job?.status}
            </span>
            <span className="jt-modal-when">
              {job?.appliedAt?.slice(0, 10)}
            </span>
          </div>
        </div>

        <div className="jt-modal-foot">
          <button
            className="jt-modal-btn jt-modal-btn-ghost"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="jt-modal-btn jt-modal-btn-danger"
            type="button"
            onClick={() => onConfirm(job.id)}
          >
            Delete application
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DeleteModal;
