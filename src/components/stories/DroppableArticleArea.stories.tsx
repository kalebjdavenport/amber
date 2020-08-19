import React from 'react';
import DroppableArticleArea from '../walking-tour-creation/DroppableArticleArea';
import ExampleDocuments from '../../documents/ExampleDocuments';
import { action } from '@storybook/addon-actions';
import ExampleWalkingTour from '../walking-tour-creation/ExampleWalkingTour';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default {
  component: DroppableArticleArea,
  title: 'DroppableArticleArea',
  parameters: {
		layout: 'fullscreen'
  },
  decorators: [(Story: any) => <DndProvider backend={HTML5Backend}><Story /></DndProvider>]
}

export const Default = () => 
  <DroppableArticleArea 
    loadedDocuments={ExampleDocuments}
    setLoadedDocuments={ action('setLoadedDocuments') }
    walkingTourEntries={ExampleWalkingTour}
    setWalkingTourEntries={ action('setWalkingTourEntries') }/>