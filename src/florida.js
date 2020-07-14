import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import {navigation,testing} from './_nav';


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
