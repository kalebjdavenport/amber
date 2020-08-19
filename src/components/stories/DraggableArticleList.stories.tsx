import React from 'react';
import DraggableArticleList from '../walking-tour-creation/DraggableArticleList';

export default {
  component: DraggableArticleList,
  title: 'DraggableArticleList',
  parameters: {
		layout: 'fullscreen'
	}
}

export const Default = () => <DraggableArticleList />