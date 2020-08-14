import React from 'react';
import tw from 'twin.macro';

/**
 * A stylized text area to keep text areas consistent throughout the website.
 */
const FormTextArea = ({label, placeholder, onChange}: {
  label?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}): JSX.Element => {
  return (
    <label
      style={tw`text-base flex flex-col my-2 w-full h-full`}>
      {label}
      <textarea 
        placeholder={placeholder}
        onChange={onChange}
        style={
          Object.assign({},
            tw`border-gray-300 
              rounded-lg 
              py-2 
              px-4 
              appearance-none 
              leading-normal  
              border
              border-solid
              text-base`,
            { fontFamily: 'Arial' }
          )
        } />
    </label>
  );
}

export default FormTextArea;