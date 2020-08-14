import React from 'react';
import WriteArticle from '../document-creation/WriteArticle';
import { FormItemInputData } from './DocumentCreationForm.stories';

export default {
  component: WriteArticle,
  title: 'WriteArticle',
}

export const Default = () => <WriteArticle {...FormItemInputData} />