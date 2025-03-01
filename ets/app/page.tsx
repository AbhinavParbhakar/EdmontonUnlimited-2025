import Image from "next/image";
import Map from "@/app/components/map";

export default function Home() {
  return (
    <div>
      <main className="place-content-center">
        <div id="overlay" className="-z-99 relative w-full place-content-end">
          <footer className="bg-white">
            YOOOO
          </footer>
        </div>

        <div id="map" className="z-1 relative">
          <Map></Map>
        </div>



      </main>
    </div>
  );
}
