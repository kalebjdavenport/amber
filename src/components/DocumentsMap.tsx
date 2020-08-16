import React from 'react';
import Document from '../documents/Document';
import MapboxMap from './MapboxMap';
import tw from 'twin.macro';

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

  return (
    <div tw="relative flex flex-col items-center">
      <div css={[tw`absolute rounded-full px-6 z-50 bg-white p-2 shadow`, {top: '15px'}]}>
      Click on a marker to bring up information!
      </div>
      <MapboxMap handleInitialRender={addMarkersAndPopupsToMap} />
    </div>
  );
}

export default DocumentsMap;