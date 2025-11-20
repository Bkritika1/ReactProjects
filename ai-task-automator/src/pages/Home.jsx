import { useState } from "react";
import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";

export default function Home() {
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(prompt) {
    if (!prompt) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `Convert this into a list of actionable steps: "${prompt}"`,
          }),
        }
      );

      const data = await response.json();

      // HuggingFace returns an array of generated_text objects
      setTasks(data[0]?.generated_text || "No tasks generated.");
    } catch (err) {
      console.error("Error generating tasks:", err);
      setTasks("Error generating tasks.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        AI Task Automator
      </h1>
      <InputBox onSubmit={handleGenerate} />
      {loading ? (
        <p style={{ textAlign: "center" }}>Generating tasks...</p>
      ) : (
        tasks && <OutputBox tasks={tasks} />
      )}
    </div>
  );
}
