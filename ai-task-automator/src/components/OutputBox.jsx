export default function OutputBox({ tasks }) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>Generated Tasks:</h3>
      <pre>{tasks}</pre>
    </div>
  );
}
