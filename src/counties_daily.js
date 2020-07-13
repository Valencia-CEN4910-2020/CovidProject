import React, { useState } from "react";
import ReactDOM from "react-dom";

/**
 * Collects Daily Covid Information from the api
 * returns array of daily covid information for each florida county
 */

const Daily = async () => {
  let response;
  let data;
  let florida = [];
let holder;
let val = 0;
for(let i =1;i<8;i++)
{
  response = await fetch(daily_url+curday(i));
  data = await response.json();
  holder = await get_florida(data);
  florida.push(holder);
}
return florida;
}

/**
 * Selects Florida data from collection
 */

const get_florida = async(data)=>{
  let florida =[];
  for (let i = 0; i < data.length; i++) {
    if(data[i].provinceState=="Florida")
    {
      florida.push(data[i]);
    }
  }
  return florida;
}

/**
 * Returns date in format consistent with the api
 */

const curday =(day)=> {
const dash = "-"
let date = new Date();
date.setDate(date.getDate() - day);
var dd = date.getDate();
var mm = date.getMonth()+1; //As January is 0.
var yyyy = date.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+dash+dd+dash+yyyy);
};

export default Daily;
