import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import FormInput from './FormInput';
import { Authenticator } from '../auth/Authenticator';

const StyledForm = styled.form`
  ${tw`
    flex 
    flex-col
    p-2
    bg-white
    w-full
  `}
`;

const SubmitBtn = styled.button`
  ${tw`
    hover:bg-blue-700 
    bg-blue-500
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
    m-2
    border-solid
    border
  `}
`;

interface SignInProps {
  onSuccess: VoidFunction,
  onMessage: (msg: string) => void,
  authenticator: Authenticator
}

/**
 * A form component that lets a user sign in with a email and password.
 * @param onSuccess the action to perform when a sign in is successful
 * @param onMessage the action to perform when there is a message from the sign-in. For instance, an
 * error message or a helpful tip.
 * @param authenticator the Authenticator object by which to authenticate the user
 */
const SignIn = ({ onSuccess, onMessage, authenticator } : SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      authenticator.login(
        email, 
        password, 
        () => onMessage("Sorry! The login was unsuccesful. Please try again."),
        onSuccess
      );
    } else {
      onMessage("Either the email or password field is empty. Please fill them in to continue.")
    }
  }

  return (
    <StyledForm onSubmit={authenticate}>
      <FormInput 
        label="Email" 
        placeholder="Type your email..." 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} 
        shouldBeSecret />
      <FormInput 
        label="Password" 
        placeholder="Type your password..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} 
        shouldBeSecret />
      <SubmitBtn type="submit">Sign in</SubmitBtn>
    </StyledForm>
  );
}

export default SignIn;