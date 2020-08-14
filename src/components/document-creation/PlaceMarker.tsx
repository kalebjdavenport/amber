import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { DocumentCreationInputProps } from './DocumentCreationInputProps';
import tw from 'twin.macro';

/**
 * The form screen where a user can place a marker, selecting a location for a region
 * @param documentBuilder the DocumentBuilder that will be written to and ultimately built after the
 * article is completed.
 * @param done the function that notifies the surrounding form that the necessary requirements for
 * this page have been completed.
 */
const PlaceMarker = ({documentBuilder, done}: DocumentCreationInputProps) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLElement | null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker | null>(() => {
    if (documentBuilder.coords) {
      const lat = documentBuilder.coords.lat;
      const lng = documentBuilder.coords.lng;
      return new mapboxgl.Marker().setLngLat([lng, lat]);
    } else {
      return null;
    }
  })

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
        center: [0, 0],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        if (marker) {
          marker.addTo(map);
          done(true);
        }
      });

      map.on("click", (ev) => {
        done(true);
        // Using callback inside setMarker because otherwise, this closure is stale and marker will
        // always have its initial value: undefined. Using a callback ensures a fresh value is used.
        setMarker(marker => {
          if (marker) marker.remove();
          documentBuilder.coords = {lng: ev.lngLat.lng, lat: ev.lngLat.lat};

          return new mapboxgl.Marker()
            .setLngLat([ev.lngLat.lng, ev.lngLat.lat])
            .addTo(map)
        })
      });
    }

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, marker, documentBuilder, done]);

  return (
    <div style={tw`flex flex-col items-center`}>
      <div style={tw`text-center`}>
        <h1>Choose a location for your article</h1>
        <h2>Click anywhere on the map to place a marker. Click again to re-place your marker.</h2>
      </div>
      <div 
        ref={el => {mapContainer.current = el}}
        style={{
          width: "80vw",
          height: "80vh",
        }}></div>
    </div>
  );
}

export default PlaceMarker;