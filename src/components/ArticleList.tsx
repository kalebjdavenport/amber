import React from 'react';
import Document from '../documents/Document';

/**
 * An ArticleList is a graphical list of `Document`s using `DocumentCard`s for each `Document`
 */
const ArticleList = ({documents}: {
  documents: Document[]
}): JSX.Element => {
  return (
    <div tw="flex flex-col content-center">
      <h1>Your Articles</h1>
      {documents.map((doc) => doc.getGraphicalCard())}
    </div>
  );
}

export default ArticleList;