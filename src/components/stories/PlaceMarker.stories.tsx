import React from 'react';
import PlaceMarker from '../document-creation/PlaceMarker';
import { FormItemInputData } from './DocumentCreationForm.stories';

export default {
  component: PlaceMarker,
  title: 'PlaceMarker',
}

export const Default = () => <PlaceMarker {...FormItemInputData} />