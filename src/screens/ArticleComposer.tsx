import React from 'react';
import ComposerHeader from '../components/ComposerHeader';
import DocumentCreationForm from '../components/document-creation/DocumentCreationForm';
import LoreOrCredible from '../components/document-creation/LoreOrCredible';
import AddTags from '../components/document-creation/AddTags';
import SelectArticleType from '../components/document-creation/SelectArticleType';
import PlaceMarker from '../components/document-creation/PlaceMarker';
import WriteArticle from '../components/document-creation/WriteArticle';

/**
 * The screen where a user goes through an article creation form and can submit it to save it.
 */
const ArticleComposer = (): JSX.Element => {
  // TODO need some way for the form to tell the header that it can be published. In fact, the next
  // button probably shouldn't even show up. Should done() be abstracted here?

  return (
    <div tw="flex flex-col w-full h-full">
      <ComposerHeader heading="Article Composer" />
      <DocumentCreationForm 
        screens={[
          LoreOrCredible,
          AddTags,
          SelectArticleType,
          PlaceMarker,
          WriteArticle
        ]} 
        handleBackOnFirstFormPage={() => {}} 
        handleNextOnLastFormPage={() => {}} />
    </div>
  );
}

export default ArticleComposer;