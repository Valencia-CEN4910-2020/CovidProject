import React, { memo,useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import Counties from "./counties";
import navigation from './_nav';
<<<<<<< Updated upstream

const geoUrl =
  "https://raw.githubusercontent.com/wrislin1/CovidProject/master/Prototype/florida2.json";

const change_county = (county) =>{
  navigation.items[0].name = county;
  //navigation.items[5].children[0] = "Hello There";

}



const MapChart = ({ setTooltipContent }) => {

=======
import testing from './testing';

/**
 * Florida map json file
 */
const geoUrl =
  "https://raw.githubusercontent.com/Valencia-CEN4910-2020/CovidProject/master/src/florida2.json";

  /**
   * This funtion gets called when a county is clicked, the selected county becomes default
   */
const change_county = (county) =>{
  //console.log(navigation);
  navigation.items[0].name = county;
  navigation.items[1].name = county + " County Current Status";
  testloc(county);
}


/**
 * Sets Testing location based on selected county
 */
const testloc= (county) =>{
  switch(county) {
  case "Brevard":
  navigation.items[4].children = testing.Brevard;
    break;
  case "Broward":
  navigation.items[4].children = testing.Broward;
    break;
  case "Charlotte":
  navigation.items[4].children = testing.Charlotte;
    break;
  case "Duval":
  navigation.items[4].children = testing.Duval;
    break;
  case "Escambia":
  navigation.items[4].children = testing.Escambia;
  break;
  case "Hillsborough":
  navigation.items[4].children = testing.Hillsborough;
    break;
  case "Lake":
  navigation.items[4].children = testing.Lake;
      break;
  case "Lee":
navigation.items[4].children = testing.Lee;
      break;
  case "Leon":
navigation.items[4].children = testing.Leon;
    break;
  case "Manatee":
navigation.items[4].children = testing.Manatee;
    break;
  case "Miami-Dade":
      navigation.items[4].children = testing.Miami;
    break;
  case "Okaloosa":
navigation.items[4].children = testing.Okaloosa;
    break;
  case "Orange":
navigation.items[4].children = testing.Orange;
    break;
    case "Palm Beach":
navigation.items[4].children = testing.Palm;
      break;
    case "Pasco":
navigation.items[4].children = testing.Pasco;
    break;
    case "Polk":
navigation.items[4].children = testing.Polk;
    break;
    case "Sarasota":
navigation.items[4].children = testing.Sarasota;
        break;
    case "St. Lucie":
navigation.items[4].children = testing.Lucie;
      break;
    case "Volusia":
navigation.items[4].children = testing.Volusia;
        break;
  default:
  navigation.items[4].children = testing.None;
}
}


/**
 * Creates zoomable map
 */
const MapChart = ({ setTooltipContent }) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  /**
   * Creates zoomable map
   */

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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<ZoomableGroup center={[ -83,27.5]} >
=======
<ZoomableGroup           zoom={position.zoom}
          center={[ -83,27.5]}
          onMoveEnd={handleMoveEnd} >
>>>>>>> Stashed changes
          <Geographies geography={geoUrl} >
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick ={()=>{change_county(geo.properties.NAME);}}
                  onMouseEnter={ async () => {
<<<<<<< Updated upstream
                    let confirmed;
                    let deaths;
=======
                    let confirmed=0;
                    let deaths=0;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                      outline: "none"
=======
                      outline: "none",
                      stroke: "white",
                      strokeWidth: "2px",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
      <div className="controls" style={{float: "right",}}>
        <button onClick={handleZoomIn}>
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
        <button onClick={handleZoomOut}>
          <svg
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
>>>>>>> Stashed changes
    </>
  );
};

export default memo(MapChart);