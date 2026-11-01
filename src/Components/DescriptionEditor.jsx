import { useEffect, useRef, useState } from "react";

const DescriptionEditor = ({ initialText, onCancel, onSave, isEditing }) => {
  const [text, setText] = useState(initialText);
  const textRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      textRef.current.focus();
    }
  }, []);
  return (
    <div>
      <textarea
        ref={textRef}
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
