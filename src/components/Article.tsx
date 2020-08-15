import React from 'react';
import Document from '../documents/Document';

/**
 * The graphical representation of a `Document`. In other words, the component where a user would
 * read a full document (as opposed to a preview).
 */
const Article = ({document}: {
  document: Document
}): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <a href="#">Back to Home Page</a>
      { document.getGraphicalArticle() }
    </div>
  );
}

export default Article;