import React, { useState, useEffect } from 'react';
import DocumentCreationInput, { DocumentCreationInputProps } from './DocumentCreationInputProps';
import tw from 'twin.macro';
import SelectableButton from './SelectableButton';

/**
 * The form screen to add tags to a historical article. Done is immediately called because tags are
 * optional.
 * @param documentBuilder the documentBuilder to create our document with. Reference is typically
 * stored with a parent element, passed along to each form screen.
 * @param done the method that tells the parent form that this form screen is at a completed state,
 * which is not necessarily the only valid completed state.
 */
const AddTags : DocumentCreationInput = 
({documentBuilder, done}: DocumentCreationInputProps): JSX.Element => {
  // Done is immediately set to true because tags are optional.
  useEffect(() => {
    done(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tags : string[] = ["Food", "Celebrations", "Music/Art", "Faith/Religion", "Business", 
    "Language", "Fashion", "Biography", "Notable Event", "Notable Time Period"];
  const [selectedTags, setSelectedTags] = useState<string[]>(documentBuilder.tags);

  // Update local copy (so we can display the list) and add to the document builder
  const addTag = (tag: string) : void => {
    setSelectedTags([...selectedTags, tag]);
    documentBuilder.tags.push(tag);
    done(true);
  }
  const removeTag = (tag: string) : void => {
    setSelectedTags(selectedTags.filter((val: string) => val !== tag));
    let index = documentBuilder.tags.indexOf(tag)
    documentBuilder.tags.splice(index);
  }

  return (
    <div style={tw`flex flex-col`}>
      <div style={Object.assign({}, tw`text-center`, {color: '#863A4D'})}>
        <h1>Please click all the tags that describe your document.</h1>
        <h2>The ones you select will display a blue border.</h2>
      </div>
      <div style={tw`flex flex-wrap justify-center`}>
        { 
          tags.map((tag, idx) => {
            return (
              <SelectableButton 
                selected={selectedTags.includes(tag)}
                key={idx}
                onSelect={() => addTag(tag)}
                onDeselect={() => removeTag(tag)}>
                  {tag}
              </SelectableButton>
            )
          })
        }
      </div>
      <div
        style={tw`flex justify-center mt-2`}>
          Selected Tags: <span style={tw`font-bold ml-1`}> {selectedTags.join(", ")}</span></div>
    </div>
  );
}

export default AddTags;