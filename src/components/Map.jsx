import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../assets/styles/components/Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hva29vbiIsImEiOiJjbHJvbDMwMGgxMGcxMnFxanEzcmd2aHRtIn0.MtR09PVeAegNhumGfXcppA";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [102.61875926470347, 17.97100091287797],
      zoom: 14,
    });

    // Add a custom marker
    const marker = new mapboxgl.Marker({
      color: "#FF0000",
    })
      .setLngLat([102.61875926470347, 17.97100091287797])
      .addTo(map.current);
  }, []);

  return (
    <>
      <div id="marker.map">
        <div
          ref={mapContainer}
          style={{
            width: 940,
            height: 350,
            borderRadius: "15px",
            marginBottom: "20px",
            boxShadow: "1px 2px 8px black"
          }}
        />
      </div>
    </>
  );
};

export default MapComponent;
