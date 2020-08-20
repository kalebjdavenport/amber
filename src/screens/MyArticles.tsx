import React from 'react';
import 'twin.macro';
import PrimaryHeader from '../components/PrimaryHeader';
import ArticleList from '../components/ArticleList';
import ExampleDocuments from '../documents/ExampleDocuments';

/**
 * Page to view the currently logged in user's articles.
 */
const MyArticles = (): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <PrimaryHeader />
      <div tw="p-2">
        <ArticleList documents={ExampleDocuments} />
      </div>
    </div>
  );
}

export default MyArticles;