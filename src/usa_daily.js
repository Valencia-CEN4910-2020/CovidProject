import React, { useState } from "react";
import ReactDOM from "react-dom";

const daily_url = "https://covid19.mathdro.id/api/daily/";
const get_data = async () => {
  let usa = [];
let holder;
let val = 0;
const response1 = await fetch(daily_url+curday(1));
const d1 = await response1.json();
holder = await get_usa(d1);
usa.push(holder);
const response2 = await fetch(daily_url+curday(2));
const d2 = await response2.json();
holder = await get_usa(d2);
usa.push(holder);
const response3 = await fetch(daily_url+curday(3));
const d3 = await response3.json();
holder = await get_usa(d3);
usa.push(holder);
const response4 = await fetch(daily_url+curday(4));
const d4 = await response4.json();
holder = await get_usa(d4);
usa.push(holder);
const response5 = await fetch(daily_url+curday(5));
const d5 = await response5.json();
holder = await get_usa(d5);
usa.push(holder);
const response6 = await fetch(daily_url+curday(6));
const d6 = await response6.json();
holder = await get_usa(d6);
usa.push(holder);
const response7 = await fetch(daily_url+curday(7));
const d7 = await response7.json();
holder = await get_usa(d7);
usa.push(holder);


return usa;
}

const get_usa = async(data)=>{
  let usa =[];
  for (let i = 0; i < data.length; i++) {
    if(data[i].countryRegion=="US")
    {
      usa.push(data[i]);
    }
  }
  return usa;
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

const Usa_daily = async () =>{
  let data = await get_data();
  let val=[0,0,0,0,0,0,0];
  for(let i = 0; i<data.length;i++){
    for(let k = 0; k<data[i].length;k++){
      val[6-i]=parseInt(val[6-i])+parseInt(data[i][k].confirmed);
  }

  }
  return val;

  

}

export default Usa_daily;
