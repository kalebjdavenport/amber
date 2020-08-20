import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import tw from 'twin.macro';

/**
 * A component that sets up the MapboxMap and provides a callback to act on the map during the
 * initial rendering of the map. Map renders to 100% width and height of parent container.
 */
const MapboxMap = ({handleInitialRender, center = [0, 0], zoom = 5}: {
  handleInitialRender: (map: mapboxgl.Map) => void,
  center?: [number, number], 
  zoom?: number
}) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!process.env.MAPBOX_ACCESS_TOKEN) {
      throw Error("A MapBox access token wasn't found in the environment variables.");
    } else {
      mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
    }

    const initializeMap = ({setMap, mapContainer}: {
      setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | null>>,
      mapContainer: React.MutableRefObject<HTMLElement | null>
    }) => {
      const map = new mapboxgl.Map({
        // container expects HTMLElement | string. mapContainer.current should have the div element
        // from below where it's assigned in the div. Therefore, it should never default to empty
        // quotes.
        container: mapContainer.current || "", 
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      // Passed in through props
      handleInitialRender(map);
    }

    if (!map) initializeMap({ setMap, mapContainer });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div style={tw`h-full w-full`} ref={el => {mapContainer.current = el}}/>;
}

export default MapboxMap;