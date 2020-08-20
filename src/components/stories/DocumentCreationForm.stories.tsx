import React from 'react';
import DocumentCreationForm from "../document-creation/DocumentCreationForm";
import { DocumentCreationInputProps } from '../document-creation/DocumentCreationInputProps';
import DocumentBuilder from '../../documents/DocumentBuilder';
import { action } from '@storybook/addon-actions';
import LoreOrCredible from '../document-creation/LoreOrCredible';
import AddTags from '../document-creation/AddTags';
import SelectArticleType from '../document-creation/SelectArticleType';
import PlaceMarker from '../document-creation/PlaceMarker';
import WriteArticle from '../document-creation/WriteArticle';

export default {
  component: DocumentCreationForm,
  title: 'DocumentCreationForm',
  excludeStories: /.*Data$/,
  parameters: {
		layout: 'fullscreen'
	}
}

export const FormItemInputData : DocumentCreationInputProps = {
  documentBuilder: new DocumentBuilder(), 
  done: (isDone) => { action('done')(isDone) }
}

export const FormData = {
  screens: [
    PlaceMarker,
    LoreOrCredible,
    AddTags,
    SelectArticleType,
    WriteArticle
  ],
  handleBackOnFirstFormPage: () => { action('handleBackOnFirstFormPage')() },
  handleNextOnLastFormPage: () => { action('handleNextOnLastFormPage')() },
}

export const Default = () => <DocumentCreationForm {...FormData} />