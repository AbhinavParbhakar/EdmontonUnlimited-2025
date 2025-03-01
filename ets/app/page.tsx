import Image from "next/image";
import Map from "@/app/components/map";

export default function Home() {
  return (
    <div className="place-content-center">
        <div id="overlay" className="-z-0 absolute top-50 w-full h-full bg-amber-50">
          <div className="">
            YOOOO
          </div>
        </div>
        <div id="map" className="w-full h-full absolute -z-99">
          <Map></Map>
        </div>
    </div>
  );
}
