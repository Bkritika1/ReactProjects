import { useState } from "react";

export default function InputBox({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <textarea
        placeholder="Describe your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button
        onClick={() => onSubmit(text)}
        style={{ marginTop: "10px", padding: "8px 16px" }}
      >
        Generate Tasks
      </button>
    </div>
  );
}
