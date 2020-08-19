import React, { useState } from 'react';
import DroppableArticleArea from './DroppableArticleArea';
import DraggableArticleList from './DraggableArticleList';
import 'twin.macro';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WalkingTourEntry } from './WalkingTour';
import ExampleDocuments from '../../documents/ExampleDocuments';
import Document from '../../documents/Document';

/**
 * A drag-and-drop walking tour creator. Users drag and drop articles into a walking tour and write
 * descriptions of how to get to and from each location along the tour. Uses react-dnd to provide
 * the drag-and-drop functionality. 
 * 
 * For more info on the library, see 
 * [the react-dnd docs](https://react-dnd.github.io/react-dnd/about). It has a nice overview section
 * that is very helpful before diving into the specific APIs.
 */
const WalkingTourCreator = (): JSX.Element => {
  const [walkingTourEntries, setWalkingTourEntries] = useState<WalkingTourEntry[]>([]);
  const [loadedDocuments, setLoadedDocuments] = useState<Document[]>(ExampleDocuments);

  return (
    <DndProvider backend={HTML5Backend}>
      <div tw="flex flex-row">
        <div tw="mx-2 sticky top-0">
          <DroppableArticleArea 
            {...{loadedDocuments, setLoadedDocuments, walkingTourEntries, setWalkingTourEntries}} />
        </div>
        <div tw="mx-2">
          <DraggableArticleList 
            {...{loadedDocuments, setLoadedDocuments, walkingTourEntries, setWalkingTourEntries}} />
        </div>
      </div>
    </DndProvider>
  );
}

export default WalkingTourCreator;