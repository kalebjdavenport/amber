import React from 'react';
import Document from '../documents/Document';
import MapboxMap from './MapboxMap';

/**
 * The map component to display documents with popups describing the contents of these documents.
 * @param documents the documents to display on the map
 */
const DocumentsMap = ({documents}: {
  documents: Document[]
}) => {
  const addMarkersAndPopupsToMap = (map: mapboxgl.Map): void => {
    documents.forEach((document) => {
      document.addToMap(map);
    });
  }

  return <MapboxMap handleInitialRender={addMarkersAndPopupsToMap} />;
}

export default DocumentsMap;