export default function NaiveImageList() {
  const items = Array.from({ length: 20000 }, (_, i) => i);
  
  return (
    <div style={{ 
      height: 500, 
      overflowY: "scroll",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 80px)",
      gap: "6px",
      border: "2px solid red"
    }}>
      {items.map((i) => (
        <img
          key={i}
          src={`https://picsum.photos/seed/${i}/80`}
          alt="img"
          width="80"
          height="80"
          style={{ objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
