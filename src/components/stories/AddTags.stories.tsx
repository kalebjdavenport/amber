import React from 'react';
import AddTags from "../document-creation/AddTags"
import { FormItemInputData } from './DocumentCreationForm.stories';

export default {
  component: AddTags,
  title: 'AddTags',
}

export const Default = () => <AddTags {...FormItemInputData} />