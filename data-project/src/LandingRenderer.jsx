import React, { useEffect } from "react";
import Sections from "./components/sections/sectionsIndex";

export default function LandingRenderer({ pageData }) {
  useEffect(() => {
    if (!pageData) return;
    const theme = pageData.theme || {};
    const set = (k,v) => document.documentElement.style.setProperty(k, v);
    set("--primary", theme.primaryColor || "#4b7cff");
    set("--accent", theme.accent || "#6bd3ff");
    set("--bg", theme.background || "#ffffff");
    set("--font-sans", theme.font || "Inter, system-ui");
    set("--card-bg", theme.cardBackground || "#fff");
  }, [pageData]);

  if (!pageData) return null;

  return (
    <div>
      {pageData.sections.map((s, idx) => {
        const Component = Sections[s.type];
        if (!Component) return null;
        return (
          // <Component key={idx} data={s.props} layout={s.layout} style={s.style}/>
            <Component key={idx} {...s.props} layout={s.layout} style={s.style} />
        );
      })}
    </div>
  );
}
