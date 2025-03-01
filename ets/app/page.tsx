import Image from "next/image";
import Map from "@/app/components/map";

export default function Home() {
  return (
    <div>
      <main>
        <div id="map">
          <Map></Map>
        </div>
      </main>
    </div>
  );
}
