import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import Counties from "./counties";

const geoUrl =
  "https://raw.githubusercontent.com/wrislin1/CovidProject/master/Prototype/florida2.json";


const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip=""
      projectionConfig={{ scale: 2500 }}
   width={800}
   height={600}
   style={{
   width: "100%",
   height: "100%",
}}
>
<ZoomableGroup center={[ -83,25]} disablePanning>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={ async () => {
                    let confirmed;
                    let counties = await Counties();
                    const name = geo.properties.NAME;
                    for(let i=0;i<counties.length;i++)
                    {
                      if(name == counties[i].admin2)
                      {
                        confirmed = counties[i].confirmed;
                      }
                    }
                    setTooltipContent(name + ": " + confirmed);
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
