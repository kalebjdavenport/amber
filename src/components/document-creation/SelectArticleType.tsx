import React, { useState, useEffect } from 'react';
import DocumentCreationInput, { DocumentCreationInputProps } from './DocumentCreationInputProps';
import tw from 'twin.macro';
import theme from '../../theme';
import { DocumentType } from '../../documents/Document';

/**
 * The form screen where a user can select the type of article they are creating including a walking
 * tour article, archive with location, and archive with region article.
 * @param documentBuilder the DocumentBuilder that will be written to and ultimately built after the
 * article is completed.
 * @param done the function that notifies the surrounding form that the necessary requirements for
 * this page have been completed.
 */
const SelectArticleType : DocumentCreationInput = 
  ({documentBuilder, done}: DocumentCreationInputProps): JSX.Element => {
  const [walkingTourSelected, setWalkingTourSelected] = 
    useState<boolean>(documentBuilder.type === DocumentType.WALKING_TOUR || false);
  const [archiveWithLocationSelected, setArchiveWithLocationSelected] = 
    useState<boolean>(documentBuilder.type === DocumentType.ARCHIVE_WITH_LOCATION || false);
  const [archiveWithRegionSelected, setArchiveWithRegionSelected] = 
    useState<boolean>(documentBuilder.type === DocumentType.ARCHIVE_WITH_REGION || false);

  // Set this form page as done by default if anything is selected
  useEffect(() => {
    done(walkingTourSelected || archiveWithLocationSelected || archiveWithRegionSelected);
  })
    
  const setToWalkingTourArticle = () => {
    documentBuilder.type = DocumentType.WALKING_TOUR;
    
    if (!walkingTourSelected) {
      done(true);
      setWalkingTourSelected(true);
      setArchiveWithLocationSelected(false);
      setArchiveWithRegionSelected(false);
    }
  }
  const setToArchiveWithLocationArticle = () => {
    documentBuilder.type = DocumentType.ARCHIVE_WITH_LOCATION;
    
    if (!archiveWithLocationSelected) {
      done(true);
      setWalkingTourSelected(false);
      setArchiveWithLocationSelected(true);
      setArchiveWithRegionSelected(false);
    }
  }
  const setToArchiveWithRegionArticle = () => {
    documentBuilder.type = DocumentType.ARCHIVE_WITH_REGION;

    if (!archiveWithRegionSelected) {
      done(true);
      setWalkingTourSelected(false);
      setArchiveWithLocationSelected(false);
      setArchiveWithRegionSelected(true);
    }
  }

  return (
    <div style={tw`flex flex-col`}>
      <div style={Object.assign({}, tw`text-center`, {color: '#863A4D'})}>
        <h1>Are you adding a verified document or local lore?</h1>
        <h2>Select one of the three options below</h2>
      </div>

      <div 
        onClick={setToWalkingTourArticle}
        style={
        Object.assign({}, 
          walkingTourSelected 
            ? tw`flex flex-col rounded border-solid outline-none text-center p-4 m-2 border-blue-600` 
            : tw`flex flex-col rounded outline-none text-center p-4 m-2`, 
          {backgroundColor: theme.PASTEL_GREEN})
        }>
        <h3>Walking Tour Article <span style={tw`text-red-600`}>(Preferred)</span></h3>
        <div>Create an article with a location and a single paragraph description. Also record a 
          30 second story or upload a short audio clip. We love it when you create walking tour 
          articles so users can easily discover your stories.</div>
      </div>

      <div 
        onClick={setToArchiveWithLocationArticle}
        style={
        Object.assign({}, 
          archiveWithLocationSelected 
            ? tw`flex flex-col rounded border-solid outline-none text-center p-4 m-2 border-blue-600` 
            : tw`flex flex-col rounded outline-none text-center p-4 m-2`, 
          {backgroundColor: theme.PASTEL_ORANGE})
        }>
        <h3>Archive With Location</h3>
        <div>Create an article with an address, up to 2000 words, and attach pictures or audio or 
          links to videos.</div>
      </div>

      <div 
        onClick={setToArchiveWithRegionArticle}
        style={
          Object.assign({}, 
            archiveWithRegionSelected 
              ? tw`flex flex-col rounded border-solid outline-none text-center p-4 m-2 border-blue-600` 
              : tw`flex flex-col rounded outline-none text-center p-4 m-2`, 
            {backgroundColor: theme.PASTEL_BLUE})
          }>
        <h3>Archive Without Location</h3>
        <div>Create an article connected to a region such as the Smoky Mountains limited to 2000 
          words.</div>
        <div style={tw`font-bold`}>* Note that regions will be specified through a textual 
        description, so if possible, we recommend using the Archive with Location above so users 
        can discover your content from the virtual map.</div>
      </div>
    </div>
  );
}

export default SelectArticleType;