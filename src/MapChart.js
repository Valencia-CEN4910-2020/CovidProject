import React, { memo,useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import Counties from "./counties";
import navigation from './_nav';

const geoUrl =
  "https://raw.githubusercontent.com/wrislin1/CovidProject/master/Prototype/florida2.json";

const change_county = (county) =>{
  navigation.items[0].name = county;
  //navigation.items[5].children[0] = "Hello There";

}


const MapChart = ({ setTooltipContent }) => {

  return (
    <>
      <ComposableMap data-tip=""
      projectionConfig={{ scale: 3000 }}
   width={800}
   height={400}
   style={{
   width: "50%",
   height: "25%",
   float: "right",

}}
>
<ZoomableGroup onMoveStart={()=>{console.log("hello")}} center={[ -83,27.5]} >
          <Geographies geography={geoUrl} >
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick ={()=>{change_county(geo.properties.NAME);}}
                  onMouseEnter={ async () => {
                    let confirmed;
                    let deaths;
                    let counties = await Counties();
            
                    const name = geo.properties.NAME;
                    for(let i=0;i<counties.length;i++)
                    {
                      if(name == counties[i].admin2)
                      {
                        confirmed = counties[i].confirmed;
                        deaths =  counties[i].deaths;
                      }
                    }
                    setTooltipContent(`${name} County <br/> Confirmed cases: ${confirmed} <br/>
                      Deaths: ${deaths}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "black",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
