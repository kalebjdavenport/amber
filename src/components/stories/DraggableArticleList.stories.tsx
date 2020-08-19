import React from 'react';
import DraggableArticleList from '../walking-tour-creation/DraggableArticleList';
import ExampleDocuments from '../../documents/ExampleDocuments';
import ExampleWalkingTour from '../walking-tour-creation/ExampleWalkingTour';
import { action } from '@storybook/addon-actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default {
  component: DraggableArticleList,
  title: 'DraggableArticleList',
  parameters: {
		layout: 'fullscreen'
  },
  decorators: [(Story: any) => <DndProvider backend={HTML5Backend}><Story /></DndProvider>]
}

export const Default = () => 
  <DraggableArticleList
    loadedDocuments={ExampleDocuments}
    setLoadedDocuments={ action('setLoadedDocuments') }
    walkingTourEntries={ExampleWalkingTour}
    setWalkingTourEntries={ action('setWalkingTourEntries') } />