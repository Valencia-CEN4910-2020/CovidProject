import React, { useState } from "react";
import ReactDOM from "react-dom";

const Daily = async () => {
  let florida = [];
let holder;
let val = 0;
const response1 = await fetch(daily_url+curday(1));
const d1 = await response1.json();
holder = await get_florida(d1);
florida.push(holder);
const response2 = await fetch(daily_url+curday(2));
const d2 = await response2.json();
holder = await get_florida(d2);
florida.push(holder);
const response3 = await fetch(daily_url+curday(3));
const d3 = await response3.json();
holder = await get_florida(d3);
florida.push(holder);
const response4 = await fetch(daily_url+curday(4));
const d4 = await response4.json();
holder = await get_florida(d4);
florida.push(holder);
const response5 = await fetch(daily_url+curday(5));
const d5 = await response5.json();
holder = await get_florida(d5);
florida.push(holder);
const response6 = await fetch(daily_url+curday(6));
const d6 = await response6.json();
holder = await get_florida(d6);
florida.push(holder);
const response7 = await fetch(daily_url+curday(7));
const d7 = await response7.json();
holder = await get_florida(d7);
florida.push(holder);


return florida;
}

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
