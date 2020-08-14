import React from 'react';
import tw from 'twin.macro';

const labelStyles = tw`
  text-base
  flex 
  flex-col 
  my-2
  w-full
`;

const inputStyles = tw`
  border-gray-300 
  rounded-lg 
  py-2 
  px-4 
  appearance-none 
  leading-normal  
  border
  border-solid
  text-base
`;

interface OnChange {
  (e: React.ChangeEvent<HTMLInputElement>): void
}

interface Props {
  label?: string;
  placeholder?: string;
  onChange?: OnChange;
  shouldBeSecret?: boolean;
}

/**
 * A styled text input for a form.
 * @param label Description text for this FormInput
 * @param placeholder the placeholder text of this FormInput 
 * @param onChange a callback that is called when something is typed into this form input
 * @param shouldBeSecret whether this textbox should display as a password field or not
 */
const FormInput = ({ label, placeholder, onChange, shouldBeSecret = false } : Props) => {
  return (
    <label style={labelStyles}>{label}
      <input 
        type={shouldBeSecret ? "password" : "text"} 
        style={inputStyles} 
        placeholder={placeholder} 
        onChange={onChange} />
    </label>
  )
}

export default FormInput;