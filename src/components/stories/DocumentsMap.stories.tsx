import React from 'react';
import DocumentsMap from '../DocumentsMap';
import exampleDocuments from '../../documents/ExampleDocuments';

export default {
  component: DocumentsMap,
  title: 'DocumentsMap',
  parameters: {
		layout: 'fullscreen'
	}
}

export const Default = () => <DocumentsMap documents={exampleDocuments} />