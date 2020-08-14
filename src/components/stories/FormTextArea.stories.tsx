import React from 'react';
import FormTextArea from '../FormTextArea';
import { action } from '@storybook/addon-actions';

export default {
  component: FormTextArea,
  title: 'FormTextArea',
}

export const Default = () => 
  <FormTextArea 
    placeholder="Example placeholder" 
    label="Example Label" 
    onChange={action('onChange')} />;