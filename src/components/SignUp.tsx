import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import theme from '../theme';
import FormInput from './FormInput';
import { Authenticator } from '../auth/Authenticator';

const StyledForm = styled.form`
  ${tw`
    flex 
    flex-col
    p-2
    rounded
    w-full
  `}
  background-color: ${ theme.PASTEL_ORANGE };
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

interface SignUpProps {
  onSuccess: VoidFunction,
  onMessage: (msg: string) => void,
  authenticator: Authenticator
}

/**
 * A form component that lets a user sign up for an account with a email and password.
 * @param onSuccess the action to perform when a sign up is successful
 * @param onMessage the action to perform when there is a message from the sign-up. For instance, an
 * error message or a helpful tip.
 * @param authenticator the Authenticator object by which to authenticate the user
 */
const SignUp = ({ onSuccess, onMessage, authenticator } : SignUpProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pWconfirmation, setPwConfirmation] = useState("");

  const authenticate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== pWconfirmation) {
      onMessage("The password and confirmation fields do not match. Please re-enter them.");
    } else if (email !== "" && password !== "") {
      authenticator.signup(
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} />
      <FormInput 
        label="Password" 
        placeholder="Must be more than 8 characters..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} 
        shouldBeSecret />
      <FormInput 
        label="Confirm Password" 
        placeholder="Must match the password above..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          setPwConfirmation(e.currentTarget.value)} 
        shouldBeSecret />
      <SubmitBtn type="submit">Create an Account</SubmitBtn>
    </StyledForm>
  );
}

export default SignUp;