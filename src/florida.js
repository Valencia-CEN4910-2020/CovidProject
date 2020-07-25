import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./MapChart";
/**
 * Creates FLorida Map Component
 */
function Florida() {
  const [content, setContent] = useState("");
  return (
    <div >
      <MapChart  setTooltipContent={setContent} />
      <ReactTooltip multiline={true} html={true}>{content}</ReactTooltip>
    </div>
  );
}

export default Florida;
