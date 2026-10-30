import { useState } from "react";

const DescriptionEditor = ({ initialText, onCancel, onSave }) => {
  const [text, setText] = useState(initialText);
  return (
    <div>
      <textarea
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
      />
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" onClick={() => onSave(text)}>
        Save
      </button>
    </div>
  );
};

export default DescriptionEditor;
