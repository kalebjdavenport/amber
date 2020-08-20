import React from 'react';
import 'twin.macro';
import AuthenticationForm from '../components/AuthenticationForm';
import { AuthenticatorMock } from '../components/stories/SignIn.stories';

/**
 * Page to either login or signup
 */
const LoginOrSignup = (): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <AuthenticationForm authenticator={new AuthenticatorMock()} />
    </div>
  );
}

export default LoginOrSignup;