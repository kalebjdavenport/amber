import React from 'react';
import ComposerHeader from '../ComposerHeader';

export default {
  component: ComposerHeader,
  title: 'ComposerHeader',
  parameters: {
		layout: 'fullscreen'
	}
}

export const Default = () => <ComposerHeader heading="Example Composer" />