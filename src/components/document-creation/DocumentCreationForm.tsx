import React, { useState } from 'react';
import DocumentBuilder from '../../documents/DocumentBuilder';
import tw from 'twin.macro';
import DocumentCreationInput from './DocumentCreationInputProps';

/**
 * The form to create a new historical article. This component keeps a container with which to
 * switch out form screens. Provides buttons to go back and forth between form screens and remembers
 * the state of the form while going back and forth between any form screens.
 * @param screens the screens that will display in the from in the same order as the given array.
 * @param handleBackOnFirstFormPage a function that runs when the user presses the back button on
 * the first form screen.
 * @param handleNextOnLastFormPage a function that runs when the user presses the next button on the
 * last form screen.
 */
const DocumentCreationForm = ({screens, handleBackOnFirstFormPage, handleNextOnLastFormPage}: {
  screens: DocumentCreationInput[],
  handleBackOnFirstFormPage: VoidFunction,
  handleNextOnLastFormPage: VoidFunction
}) : JSX.Element => {
  // Whether or not the user can proceed past the current part of the form or not
  const [canProceed, setCanProceed] = useState<boolean>(false);
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [docBuilder] = useState(new DocumentBuilder());

  // The index of the form screen we're at within the formContents array
  const [currFormScreenIdx, setCurrFormScreenIdx] = useState(0);
  const back = () => {
    if (currFormScreenIdx > 0) {
      setCurrFormScreenIdx(currFormScreenIdx - 1);
    } else {
      handleBackOnFirstFormPage();
    }
  }
  const next = () => {
    if (currFormScreenIdx < screens.length - 1) {
      setCanProceed(false);
      setCurrFormScreenIdx(currFormScreenIdx + 1);
      setCanGoBack(true);
    } else {
      handleNextOnLastFormPage();
    }
  }
  
  const screenComponents = 
    screens.map((Screen) => <Screen documentBuilder={docBuilder} done={setCanProceed} />);

  return (
    <div style={tw`flex flex-col`}>
      { screenComponents[currFormScreenIdx] }
      <div style={tw`flex flex-row justify-center mt-4`}>
        <button 
          onClick={back} 
          disabled={!canGoBack}
          style={tw`flex flex-row items-center mr-2 p-2`}>Back</button>
        <button 
          onClick={next} 
          disabled={!canProceed}
          style={tw`flex flex-row items-center ml-2 p-2`}>Next</button>
      </div>
    </div>
  );
}

export default DocumentCreationForm;