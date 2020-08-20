import React from 'react';
import PrimaryHeader from '../components/PrimaryHeader';
import Article from '../components/Article';
import ExampleDocuments from '../documents/ExampleDocuments';
import 'twin.macro';

/**
 * Page to view an article after having searched for it.
 */
const ViewArticle = (): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <PrimaryHeader />
      <div tw="p-2">
        <Article document={ExampleDocuments[0]} />
      </div>
    </div>
  );
}

export default ViewArticle;