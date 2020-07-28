import '../SignUp';
import React from 'react';

import SignUp from '../SignUp';
import { action } from '@storybook/addon-actions';
import { AuthenticatorMock } from './SignIn.stories';

export default {
  component: SignUp,
  title: 'SignUp',
}

export const Default = () => 
  <SignUp 
    onSuccess={() => { action('onSuccess') }} 
    onMessage={(msg: string) => { action('onMessage') }}
    authenticator={new AuthenticatorMock()} />