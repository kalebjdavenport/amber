import React from 'react';
import 'twin.macro';
import ComposerHeader from '../components/ComposerHeader';
import WalkingTourCreator from '../components/walking-tour-creation/WalkingTourCreator';

/**
 * Page to create a new walking tour.
 */
const CreateWalkingTour = (): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <ComposerHeader heading="Walking Tour Creator" />
      <WalkingTourCreator />
    </div>
  );
}

export default CreateWalkingTour;