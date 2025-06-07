// ResizeExample.js
import React from "react";
import useWindowResize from "./useWindowResize";

export default function ResizeExample() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h2>Resize the window!</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
