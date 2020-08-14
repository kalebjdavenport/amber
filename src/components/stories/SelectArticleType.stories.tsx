import React from 'react';
import SelectArticleType from "../document-creation/SelectArticleType"
import { FormItemInputData } from './DocumentCreationForm.stories';

export default {
  component: SelectArticleType,
  title: 'SelectArticleType',
}

export const Default = () => <SelectArticleType {...FormItemInputData} />