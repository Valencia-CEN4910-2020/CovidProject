import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

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
                  onMouseEnter={() => {
                    const { NAME} = geo.properties;
                    setTooltipContent(`${NAME}`);
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
