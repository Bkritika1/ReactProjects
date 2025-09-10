import React, { useState, useRef, useEffect } from "react";
import Toolbar from "./Toolbar";

function EditableSection({ id, value, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [html, setHtml] = useState(value);
  const [backup, setBackup] = useState(value);
  const ref = useRef();

  const handleClick = () => {
    setBackup(html);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(html);
  };

  const handleCancel = () => {
    setHtml(backup);
    setIsEditing(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsEditing(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`editable-section ${isEditing ? "active" : ""}`} onClick={handleClick}>
      {isEditing && <Toolbar targetRef={ref} />}
      <div
        ref={ref}
        className="editable-content"
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: html }}
        onInput={(e) => setHtml(e.currentTarget.innerHTML)}
      />
      {isEditing && (
        <div className="buttons">
          <button onClick={handleSave}>Done</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default EditableSection;