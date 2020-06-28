import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import navigation from './_nav';


import MapChart from "./MapChart";

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
