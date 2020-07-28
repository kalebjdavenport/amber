import React from 'react';
import { action } from '@storybook/addon-actions';

import SignIn from '../SignIn';
import { Authenticator } from '../../auth/Authenticator';

export default {
  component: SignIn,
  title: 'SignIn',
  excludeStories: ['AuthenticatorMock']
}

/**
 * Mock to use for testing.
 */
export class AuthenticatorMock implements Authenticator {
  login (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) : void {
    action('login')([password, email])
  }

  signup (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) : void {
    action('signup')([password, email]);
  }
}

export const Default = () => 
  <SignIn 
    onSuccess={() => { action('onSuccess') }} 
    onMessage={(msg: string) => { action('onMessage') }} 
    authenticator={new AuthenticatorMock()} />