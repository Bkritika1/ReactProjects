import React, { useState } from "react";
import EditableSection from "./EditableSection";

const initialSections = {
  name: "Click to edit name",
  bio: "Click to edit bio text",
  summary: "Click to edit summary text"
};

function App() {
  const [sections, setSections] = useState(initialSections);

  const handleSave = (key, newValue) => {
    setSections((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <div className="app">
      {Object.entries(sections).map(([key, value]) => (
        <EditableSection
          key={key}
          id={key}
          value={value}
          onSave={(val) => handleSave(key, val)}
        />
      ))}
    </div>
  );
}

export default App;