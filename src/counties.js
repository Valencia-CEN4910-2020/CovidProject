import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
<<<<<<< Updated upstream

const confirmed_url = "https://covid19.mathdro.id/api/countries/USA/confirmed";
=======
/**
 * Api url
 */
const confirmed_url = "https://covid19.mathdro.id/api/countries/USA/confirmed";
/**
 * Collects FLorida Covid Information from the api
 */
>>>>>>> Stashed changes
const Counties = async () => {
let fcounties =[];
const response = await fetch(confirmed_url);
const data = await response.json();
for (let i = 0; i < data.length; i++) {
  if(data[i].provinceState=="Florida")
  {
    fcounties.push(data[i]);

  }
}

return fcounties;
}

export default Counties;
