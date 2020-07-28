import React from 'react';

import AuthenticationForm from '../AuthenticationForm';
import { AuthenticatorMock } from './SignIn.stories';

export default {
  component: AuthenticationForm,
  title: 'AuthenticationForm',
}

export const Default = () => <AuthenticationForm authenticator={new AuthenticatorMock()} />