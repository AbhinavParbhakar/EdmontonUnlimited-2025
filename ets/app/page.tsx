"use client"
import Map from "@/app/components/map";
import { Dispatch, SetStateAction, useState } from "react";

interface GTFSCacheDat {
  shape: string,
  name: string,
  number: string,
  id: string,
}

interface Resp {
  Response: Array<GTFSCacheDat> 
}

function unpackDatalist(data: Resp | null) {
  if(data) {
    console.log("WORKING");

    return (<datalist id="gtfscache">
      {
      
          data.Response.map(x => {
            return (<option key={x.number}>{x.number}</option>)
          })

      }
    </datalist>)
  } else {
    return (<option>Loading...</option>)
  }
}

export default function Home() {

  const [gtfscache, setCache] : [Resp | null, Dispatch<SetStateAction<null>>]= useState(null);
  fetch("https://edmonton-unlimited-2025.vercel.app/api/gtfs").then(x => {
    x.json().then(y => setCache(y));
  });
  const hiddenSubsearchClass = "-z-97 absolute w-full h-0 pointer-events-none hidden"
  const shownSubsearchClass = "-z-97 absolute w-full h-full pointer-events-auto place-content-center backdrop-blur-xs rounded-lg"
  const [subsearchIsHidden, setSubsearchHidden] = useState(true);
  return (
    <div className="place-content-center">

        <div id="subsearch-overlay" onClick={() => setSubsearchHidden(true)} className={subsearchIsHidden ? hiddenSubsearchClass : shownSubsearchClass }>
          <div className="bg-white p-5 m-25">
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Capacity</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Cleanliness or Hazardous Materials</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Safety</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Reliability & Delays</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Accessibility</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Infrastructure or Maintenance</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Customer Service and Communication</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Service Coverage & Convenience</div>
            <div className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Other feedback</div>
          </div>
        </div>
        <div id="main-overlay" className="-z-98 absolute w-full h-25 pointer-events-none backdrop-blur-xs">
          <datalist id="gtfscache">
            {
              unpackDatalist(gtfscache)
            }
          </datalist>

          <div className="p-5">
            {/* <div onClick={() => setSubsearchHidden(false)} className="cursor-pointer m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">What would you like to report?</div> */}
            <form>
            <input type="text" list="gtfscache" placeholder="Search Route or Station" className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <input type="text" placeholder="Select a Time (optional)" className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>

            <select name="Categories" id="categories" className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">

            <option value="Capacity" >Capacity</option>
            <option value="Cleanliness" >Cleanliness or Hazardous Materials</option>
            <option value="Safety" >Safety</option>
            <option value="Reliability" >Reliability & Delays</option>
            <option value="Accessibility" >Accessibility</option>
            <option value="Infastructure" >Infrastructure or Maintenance</option>
            <option value="Communication" >Customer Service and Communication</option>
            <option value="Coverage" >Service Coverage & Convenience</option>
            <option value="Other" >Other feedback</option>
            </select>
            <button onClick={() => {
              fetch('api/query/zqiAJ3BUOBlOsPygD2kZ/2025-03-01:14:00:00/15').then(x => x);
            }} className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">Submit</button>
            </form>
          </div>
        </div>
        <div id="map" className="w-full h-full absolute -z-99">
          <Map></Map>
        </div>
    </div>
  );
}
