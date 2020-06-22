import React, { useState } from "react";
import ReactDOM from "react-dom";


const Daily = async (url) => {

let val = 0;
let counties =[];
const response = await fetch(url);
const data = await response.json();
for (let i = 0; i < data.length; i++) {
  if(data[i].provinceState=="Florida")
  {
    let x= data[i].confirmed;
    val = parseInt(val) + parseInt(x);
    counties.push(data[i]);
  }
}

return val;
}

export default Daily;
