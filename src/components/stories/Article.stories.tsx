import React from 'react';
import Article from '../Article';
import ExampleDocuments from '../../documents/ExampleDocuments';

export default {
  component: Article,
  title: 'Article',
}

export const Default = () => <Article document={ExampleDocuments[0]} />