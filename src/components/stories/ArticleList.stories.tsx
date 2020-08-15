import React from 'react';
import ArticleList from '../ArticleList';
import exampleDocuments from '../../documents/ExampleDocuments';

export default {
  component: ArticleList,
  title: 'ArticleList',
}

export const Default = () => <ArticleList documents={exampleDocuments} />