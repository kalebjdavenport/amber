import React, { useState } from 'react';
import tw from 'twin.macro';
import theme from '../theme';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Authenticator } from '../auth/Authenticator';

interface AuthenticatorFormProps {
  authenticator: Authenticator;
}

/**
 * The model that allows a user to either login or sign up. 
 * @param authenticator the Authenticator object to use for authentication. By default will be
 * connected to some sort of authentication service like Firebase but a mock could also be passed in
 * for the sake of testing.
 */
const AuthenticationForm = ({ authenticator } : AuthenticatorFormProps) => {
  const initMessages : string[] = [];
  const [messages, setMessages] = useState(initMessages);

  const addMessage = (msg: string) : void => {
    setMessages([...messages, msg]);
  }

  return (
    <div style={tw`flex flex-col rounded`}>
      <div style={Object.assign({}, 
                  tw`p-4 rounded`, 
                  {backgroundColor: theme.PASTEL_GREEN, textAlign: 'center' as const})}>
        <h1>Welcome to Project Amber</h1>
        <div>Let’s upload your local history to the internet and make it easy to learn and explore!</div>
      </div>
      <div style={tw`flex flex-row `}>
        <SignUp
          onSuccess={() => {}}
          onMessage={addMessage}
          authenticator={authenticator} />
        <SignIn
          onSuccess={() => {}}
          onMessage={addMessage}
          authenticator={authenticator} />
      </div>
    </div>
  );
}

export default AuthenticationForm;