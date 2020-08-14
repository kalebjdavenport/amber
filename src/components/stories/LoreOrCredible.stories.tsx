import React from 'react';
import LoreOrCredible from "../document-creation/LoreOrCredible"
import { FormItemInputData } from './DocumentCreationForm.stories';

export default {
  component: LoreOrCredible,
  title: 'LoreOrCredible',
}

export const Default = () => <LoreOrCredible {...FormItemInputData} />