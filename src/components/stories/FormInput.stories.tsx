import React from 'react';

import FormInput from '../FormInput';

export default {
  component: FormInput,
  title: 'FormInput',
}

export const Default = () => <FormInput label="Example label" placeholder="Example placeholder" />
export const PasswordInput = () => 
  <FormInput 
    label="Example label" 
    placeholder="Example placeholder" 
    shouldBeSecret />