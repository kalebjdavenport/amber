import React from 'react';
import MapboxMap from '../MapboxMap';
import { action } from '@storybook/addon-actions';

export default {
  component: MapboxMap,
  title: 'MapboxMap',
  parameters: {
		layout: 'fullscreen'
	}
}

export const Default = () => <MapboxMap handleInitialRender={() => action('initial render')} />