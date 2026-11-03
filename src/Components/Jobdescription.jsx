import DescriptionEditor from "./DescriptionEditor";

const Jobdescription = ({
  jobDescriptionText,
  isEditing,
  setIsEditing,
  onSave,
}) => {
  if (isEditing) {
    return (
      <DescriptionEditor
        initialText={jobDescriptionText}
        onCancel={() => setIsEditing(false)}
        onSave={onSave}
        isEditing={isEditing}
      />
    );
  }
  if (!jobDescriptionText) {
    return (
      <div className="jt-d-drop">
        <span className="jt-d-drop-icon" aria-hidden="true">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11.5 2.5H5.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7Z" />
            <path d="M11.5 2.5V7H16M7 11h6M7 14h4" />
          </svg>
        </span>
        <strong>No job description yet</strong>
        <p>
          Paste it in from the job posting so you still have it after the
          listing comes down.
        </p>
        <div className="jt-d-drop-actions">
          <button
            className="jt-d-btn jt-d-btn-primary"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Add description
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>{jobDescriptionText}</p>
    </div>
  );
};

export default Jobdescription;
