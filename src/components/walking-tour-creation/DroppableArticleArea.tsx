import React, { useState } from 'react';
import 'twin.macro';
import Document, { DraggableCardType } from '../../documents/Document';
import FormInput from '../FormInput';
import { useDrop, useDrag } from 'react-dnd';
import tw from 'twin.macro';
import { WalkingTourEntry } from './WalkingTour';
import FormTextArea from '../FormTextArea';

/**
 * A card showing the preview of a document with an input box allowing a user to enter directions to
 * this particular document location.
 */
const DocumentWithLocationInput = ({document}: {
  document: Document
}): JSX.Element => {
  return (
    <div tw="flex flex-col">
      <FormTextArea 
        label="Add directions from the last specified point" 
        placeholder="Walking directions..." />
      <document.getDraggableCard 
        cardType={DraggableCardType.WALKING_TOUR_ENTRY}
        onDragEnd={(item, monitor) => {

        }} />
    </div>
  );
}

/**
 * The area that a user can drag an article into.
 * @param index the placement of this drag area within the list of walking tour articles. Will be
 * used to determine where to place an article within the walking tour timeline upon a drop event.
 * @param addEntryAt a function that adds an entry to the list of walking tours at a specified index
 * @param deleteDocument a function that deletes a document given an id
 */
const DropArea = ({index, addEntryAt, deleteDocument}: {
  index: number,
  addEntryAt: (entry: WalkingTourEntry, idx: number) => void,
  deleteDocument: (id: string) => void
}): JSX.Element => {
  const [collectedProps, drop] = useDrop({
    accept: DraggableCardType.ARTICLE,
    drop: (item: {type: string, article: Document}, monitor) => {
      // Updates state of walking tour entries, adding this new article to the walking tour
      addEntryAt({
        article: item.article,
        directionsFromLastPoint: ""
      }, index);

      deleteDocument(item.article.id);
    },
    collect: (monitor) => {
      return {
        hovered: monitor.isOver() 
      }
    }
  });
  
  return (
    <div css={[
      tw`w-full flex flex-row content-center rounded justify-center p-2 my-2 box-border`, 
      collectedProps.hovered 
        ? tw`bg-blue-300` 
        : tw`bg-gray-300`
      ]}
      ref={drop}>Drag and drop an article here to add</div>
  );
}

/**
 * The parent of the main part of the walking tour creator that adds the visuals to show where the
 * start and end of the walking tour are. Looks like:
 * ```
 *   Start
 *     |
 * {children}
 *     |
 *    End
 * ```
 */
const StartEndWrapper = ({children}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div tw="flex flex-col items-center">
      <h4>Start</h4>
      |
      {children}
      |
      <h4>End</h4>
    </div>
  );
}

/**
 * The area of a walking tour creator where user can drop articles into to create a walking tour.
 * Requires a DndProvider (via the react-dnd library) to provide context.
 * @param walkingTourEntries the walking tour entries available to this walking tour
 * @param setWalkingTourEntries a function that sets the state of the walking tour entries
 */
const DroppableArticleArea = 
({loadedDocuments, setLoadedDocuments, walkingTourEntries, setWalkingTourEntries}: {
  loadedDocuments: Document[],
  setLoadedDocuments: React.Dispatch<React.SetStateAction<Document[]>>,
  walkingTourEntries: WalkingTourEntry[]
  setWalkingTourEntries: React.Dispatch<React.SetStateAction<WalkingTourEntry[]>>
}): JSX.Element => {
  const addEntryAt = (entry: WalkingTourEntry, idx: number): void => {
    setWalkingTourEntries([
      ...walkingTourEntries.slice(0, idx),
      entry,
      ...walkingTourEntries.slice(idx)
    ]);
  }

  const deleteDocumentFromList = (id: string) => {
    setLoadedDocuments(
      loadedDocuments.filter(doc => doc.id !== id)
    );
  }

  // TODO doesn't really feel like deleting an article from the list of articles should be the drop
  // areas job but I'm too tired to think about what the right thing to do is
  return (
    <div tw="flex flex-col">
      <h2 tw="mb-0">Create a Walking Tour</h2>
      <p tw="m-0">Click, drag, and drop the articles on the right onto the area below
         to add them to your walking tour.</p>
      <StartEndWrapper>
        <DropArea index={0} addEntryAt={addEntryAt} deleteDocument={deleteDocumentFromList} />
        {walkingTourEntries.map((entry, idx) => {
          return (
            <div key={entry.article.id}>
              <DocumentWithLocationInput document={entry.article} />
              <DropArea 
                index={idx + 1} 
                addEntryAt={addEntryAt} 
                deleteDocument={deleteDocumentFromList} />
            </div>
          );
        })}
      </StartEndWrapper>
    </div>
  );
}

export default DroppableArticleArea;