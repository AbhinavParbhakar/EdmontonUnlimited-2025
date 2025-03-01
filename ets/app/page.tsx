"use client"
import Map from "@/app/components/map";
import { useState } from "react";

function getData() {
  return (<option>lol</option>);
}

export default function Home() {
  const hiddenSubsearchClass = "-z-97 absolute w-full h-25 pointer-events-none hidden"
  const shownSubsearchClass = "-z-97 absolute w-full h-25 pointer-events-auto"
  const [subsearchIsHidden, setSubsearchHidden] = useState(true);
  return (
    <div className="place-content-center">

        <div id="subsearch-overlay" className={subsearchIsHidden ? hiddenSubsearchClass : shownSubsearchClass }>
          AAAAA
        </div>
        <div id="main-overlay" className="-z-98 absolute w-full h-25 pointer-events-none backdrop-blur-xs">
          <datalist id="gtfscache">
            {
              getData()
            }
          </datalist>

          <div className="p-5">
            <input type="text" list="gtfscache" placeholder="Search Route or Station" className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <input type="text" placeholder="Select a Time (optional)" className="m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <div onClick={() => setSubsearchHidden(false)} className="cursor-pointer m-1 pointer-events-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">What would you like to report?</div>
          </div>
        </div>
        <div id="map" className="w-full h-full absolute -z-99">
          <Map></Map>
        </div>
    </div>
  );
}
