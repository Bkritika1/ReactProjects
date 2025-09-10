import React from "react";

const exec = (cmd, val = null) => {
  document.execCommand(cmd, false, val);
};

function Toolbar({ targetRef }) {
  return (
    <div className="toolbar">
      <button onClick={() => exec("bold")}><b>B</b></button>
      <button onClick={() => exec("italic")}><i>I</i></button>
      <button onClick={() => exec("foreColor", "#e91e63")}>Color</button>
      <button onClick={() => exec("fontSize", "4")}>Size</button>
      <button onClick={() => exec("removeFormat")}>Clear</button>
    </div>
  );
}

export default Toolbar;