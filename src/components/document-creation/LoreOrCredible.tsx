import React, { useState } from 'react';
import DocumentCreationInput, { DocumentCreationInputProps } from './DocumentCreationInputProps';
import tw from 'twin.macro';
import InfoIcon from '@material-ui/icons/Info';
import SelectableButton from './SelectableButton';

/**
 * A form screen for adding whether the article a user is creating is credible or not. Credible is
 * defined as having some sort of citation
 * @param documentBuilder the documentBuilder to create our document with. Reference is typically
 * stored with a parent element, passed along to each form screen.
 * @param done the method that tells the parent form that this form screen is at a completed state,
 * which is not necessarily the only valid completed state.
 */
const LoreOrCredible : DocumentCreationInput = 
  ({documentBuilder, done}: DocumentCreationInputProps): JSX.Element => {
  const [verifiedSelected, setVerifiedSelected] = 
    useState<boolean>(documentBuilder.verified || false);
  const [loreSelected, setLoreSelected] = 
    useState<boolean>(documentBuilder.verified === false || false);

  // the event that happens when the verified button/area is selected
  const selectVerified = () => {
    documentBuilder.verified = true;
    done(true);
    setVerifiedSelected(true);
    setLoreSelected(false);
  }

  // the event that happens when the local lore button/area is selected
  const selectLore = () => {
    documentBuilder.verified = false; 
    done(true);
    setVerifiedSelected(false);
    setLoreSelected(true);
  }

  return (
    <div style={tw`flex flex-col`}>
      <div style={Object.assign({}, tw`text-center`, {color: '#863A4D'})}>
        <h1>Are you adding a verified document or local lore?</h1>
        <h2>Select one of the two options below</h2>
      </div>
      <div style={tw`flex flex-row text-center mx-4`}>
        <InfoIcon />
        <div>
          Verified documents must include at least one citation from a credible source.

          You may cite a primary source or historian in a verified document, but we encourage you 
          to add local lore if you have an interesting story that includes uncertain details or 
          unverifiable facts.
        </div>
      </div>
      <div style={tw`flex flex-col justify-center text-center`}>
        <SelectableButton
          selected={verifiedSelected}
          onSelect={selectVerified} 
          onDeselect={() => {}}>
            Verified Document
        </SelectableButton>
        <SelectableButton
          selected={loreSelected}
          onSelect={selectLore} 
          onDeselect={() => {}}>
            Local Lore
        </SelectableButton>
      </div>
    </div>
  );
}

export default LoreOrCredible;