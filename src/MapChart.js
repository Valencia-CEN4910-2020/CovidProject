import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import Counties from "./counties";
import * as nav from './_nav';

/**
 * Florida map json file
 */
const geoUrl =
  "https://raw.githubusercontent.com/Valencia-CEN4910-2020/CovidProject/master/src/florida2.json";

/**
 * This funtion gets called when a county is clicked, the selected county becomes default
    items[0] = Florida Resources
    items[1] = Recovery Plan
    items[2] = State of Emergency
    items[3] = County Resources
    items[4] = Testing Locations
 */

const change_county = (county) => {
  nav.county.county = county;
  nav.navigation.items[3].name = nav.county.county + " County Resources"
  nav.navigation.items[4].name = "Testing Locations";
  testloc(county);
}


/**
 * Sets testing location based on selected county
 */
const testloc = (county) => {
  switch (county) {
    case "Brevard":
      nav.navigation.items[4].children = nav.testing.Brevard;
      break;
    case "Broward":
      nav.navigation.items[4].children = nav.testing.Broward;
      break;
    case "Charlotte":
      nav.navigation.items[4].children = nav.testing.Charlotte;
      break;
    case "Duval":
      nav.navigation.items[4].children = nav.testing.Duval;
      break;
    case "Escambia":
      nav.navigation.items[4].children = nav.testing.Escambia;
      break;
    case "Hillsborough":
      nav.navigation.items[4].children = nav.testing.Hillsborough;
      break;
    case "Lake":
      nav.navigation.items[4].children = nav.testing.Lake;
      break;
    case "Lee":
      nav.navigation.items[4].children = nav.testing.Lee;
      break;
    case "Leon":
      nav.navigation.items[4].children = nav.testing.Leon;
      break;
    case "Manatee":
      nav.navigation.items[4].children = nav.testing.Manatee;
      break;
    case "Miami-Dade":
      nav.navigation.items[4].children = nav.testing.Miami;
      break;
    case "Okaloosa":
      nav.navigation.items[4].children = nav.testing.Okaloosa;
      break;
    case "Orange":
      nav.navigation.items[4].children = nav.testing.Orange;
      break;
    case "Palm Beach":
      nav.navigation.items[4].children = nav.testing.Palm;
      break;
    case "Pasco":
      nav.navigation.items[4].children = nav.testing.Pasco;
      break;
    case "Polk":
      nav.navigation.items[4].children = nav.testing.Polk;
      break;
    case "Sarasota":
      nav.navigation.items[4].children = nav.testing.Sarasota;
      break;
    case "St. Lucie":
      nav.navigation.items[4].children = nav.testing.Lucie;
      break;
    case "Volusia":
      nav.navigation.items[4].children = nav.testing.Volusia;
      break;
    default:
      nav.navigation.items[4].children = nav.testing.None;
  }
}


/**
 * Creates zoomable map
 */
const MapChart = ({ setTooltipContent }) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });


  /**
   * Handles the map zoom in feature
   */
  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }
  /**
   * Handles the map zoom out feature
   */
  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }
  /**
   * Renders florida map
   */
  return (
    <div>
      <ComposableMap data-tip=""
        projectionConfig={{ scale: 4500 }}
        // width={800}
        //height={600}
        style={{
          width: "100%",
          outline: "black solid 1px"

        }}
      >
        <ZoomableGroup zoom={position.zoom}
          center={[-83, 27.5]}
          onMoveEnd={handleMoveEnd} >
          <Geographies geography={geoUrl} >
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => { change_county(geo.properties.NAME); }}
                  onMouseEnter={async () => {
                    let confirmed = 0;
                    let deaths = 0;
                    let counties = await Counties();

                    const name = geo.properties.NAME;
                    for (let i = 0; i < counties.length; i++) {
                      if (name == counties[i].admin2) {
                        confirmed = counties[i].confirmed;
                        deaths = counties[i].deaths;
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
                      outline: "none",
                      stroke: "white",
                      strokeWidth: "1px",
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

      <div className="controls" style={{position:"flex",transform: "translatey(-310px)", float: "right",paddingRight: "10px",  top: 0,
  left: "50%"}}>
        <button onClick={handleZoomIn} style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    height: "2rem",
    width: "2rem",
    background: "#ff5533",
    color: "#fff",
    borderRadius: "100%",
    border: 0}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut} style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    height: "2rem",
    width: "2rem",
    background: "#ff5533",
    color: "#fff",
    borderRadius: "100%",
    border: 0}}>
          <svg   style={{display: "inline-block",
  verticalAlign: "middle"}}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default memo(MapChart);
