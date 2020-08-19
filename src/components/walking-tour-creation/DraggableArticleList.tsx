import React, { useState } from 'react';
import Document, { DraggableCardType } from '../../documents/Document';
import { useDrop } from 'react-dnd';
import { WalkingTourEntry } from './WalkingTour';

/**
 * The area in a walking tour creator where a user can view a list of articles and optionally drag
 * them into another area. Requires a DndProvider (via the react-dnd library) to provide context.
 * @param documents the documents that are available for this walking tour
 */
const DraggableArticleList = 
({loadedDocuments, setLoadedDocuments, walkingTourEntries, setWalkingTourEntries}: {
  loadedDocuments: Document[],
  setLoadedDocuments: React.Dispatch<React.SetStateAction<Document[]>>,
  walkingTourEntries: WalkingTourEntry[],
  setWalkingTourEntries: React.Dispatch<React.SetStateAction<WalkingTourEntry[]>>
}): JSX.Element => {
  const [collectedProps, drop] = useDrop({
    accept: DraggableCardType.WALKING_TOUR_ENTRY,
    drop: (item: {type: string, article: Document}, monitor) => {
      setLoadedDocuments([
        item.article, 
        ...loadedDocuments
      ]);

      setWalkingTourEntries(
        walkingTourEntries.filter(entry => entry.article.id !== item.article.id)
      );
    },
  });
  
  return (
    <div tw="flex flex-col content-center" ref={drop}>
      <h1>Your Articles</h1>
      {loadedDocuments.map(doc =>
        <doc.getDraggableCard 
          key={doc.id} 
          cardType={DraggableCardType.ARTICLE} />)}
    </div>
  );
}

export default DraggableArticleList;