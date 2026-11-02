import { useEffect, useRef, useState } from "react";

const DescriptionEditor = ({ initialText, onCancel, onSave, isEditing }) => {
  const [text, setText] = useState(initialText);
  const textRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      textRef.current.focus();
      const end = textRef.current.value.length;

      textRef.current.setSelectionRange(end, end);
    }
  }, []);
  return (
    <div className="jt-d-editor">
      <textarea
        ref={textRef}
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
      />
      <div className="jt-d-editor-foot">
        <div className="jt-d-sec-actions">
          <button
            className="jt-d-btn jt-d-btn-quiet"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="jt-d-btn jt-d-btn-primary"
            type="button"
            onClick={() => onSave(text)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionEditor;
