import { useRef, useState, useEffect } from "react";

export default function VirtualizedImageList() {
  const itemSize = 90;
  const itemsPerRow = 10;
  const totalItems = 20000;
  const containerHeight = 500;
  const totalRows = Math.ceil(totalItems / itemsPerRow);

  const containerRef = useRef(null);
  const [startRow, setStartRow] = useState(0);
  const visibleRows = Math.ceil(containerHeight / itemSize);

  const items = Array.from({ length: totalItems }, (_, i) => i);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      setStartRow(Math.floor(scrollTop / itemSize));
    };

    el.addEventListener("scroll", onScroll);

    return () => {
      // Safe cleanup 🛡️ Prevents crash
      if (el) {
        el.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  const visibleItems = items.slice(
    startRow * itemsPerRow,
    (startRow + visibleRows) * itemsPerRow
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflowY: "scroll",
        border: "2px solid green",
        position: "relative"
      }}
    >
      <div style={{ height: totalRows * itemSize }}>
        <div
          style={{
            transform: `translateY(${startRow * itemSize}px)`,
            position: "absolute",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(10, 80px)",
            gap: "6px",
          }}
        >
          {visibleItems.map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${i}/80`}
              height="80"
              width="80"
              alt="img"
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
