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
      />
    );
  }
  return (
    <div>
      <p>{jobDescriptionText}</p>
    </div>
  );
};

export default Jobdescription;
