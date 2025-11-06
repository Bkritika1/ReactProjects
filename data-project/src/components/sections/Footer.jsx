import React from "react";

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div>{data.brand} &nbsp; - &nbsp; {data.copy}</div>
          <div style={{opacity:0.9}}>Follow: {data.socials.join(" • ")}</div>
        </div>
      </div>
    </footer>
  );
}
