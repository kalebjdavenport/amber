import React, { useState, useEffect } from 'react';
import { DocumentCreationInputProps } from './DocumentCreationInputProps';
import theme from '../../theme';
import FormInput from '../FormInput';
import FormTextArea from '../FormTextArea';
import tw from 'twin.macro';

/**
 * A function that returns a boolean indicating whether a piece of text is valid for a particular
 * condition.
 */
interface TextValidator {
  (text: string): boolean
}

/**
 * The form page where a user can write an article including the title and article body.
 * @param documentBuilder the DocumentBuilder that will be written to and ultimately built after the
 * article is completed.
 * @param done the function that notifies the surrounding form that the necessary requirements for
 * this page have been completed.
 */
const WriteArticle = ({documentBuilder, done}: DocumentCreationInputProps): JSX.Element => {
  const [titleValid, setTitleValid] = useState(false);
  const [bodyValid, setBodyValid] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (titleValid && bodyValid) {
      documentBuilder.articleTitle = title;
      documentBuilder.articleBody = body;
      done(true);
    } else {
      done(false);
    }
  })

  const validators : TextValidator[] = [];

  // Runs through all of `validators` to ensure that the given text is valid
  const isValid = (text: string): boolean => {
    let valid = true;

    for (let validator of validators) {
      if (!validator(text)) {
        valid = false;
        break;
      }
    }

    return valid;
  }

  const isNotEmpty = (text: string) => text.length > 0;
  validators.push(isNotEmpty);

  return (
    <div style={tw`flex flex-col items-center`}>
      <div style={{color: theme.HEADING_COLOR}}>
        <h1>Write Your Article Below</h1>
        <h3>Provided below is a space for a title and a space for the article body.</h3>
      </div>
      <FormInput 
        placeholder="Type your title here..." 
        label="Title" 
        onChange={(e) => {
          setTitleValid(isValid(e.target.value));
          setTitle(e.target.value);
        }} />
      <FormTextArea 
        placeholder="Type your article here..." 
        label="Body" 
        onChange={(e) => {
          setBodyValid(isValid(e.target.value));
          setBody(e.target.value);
        }} />
    </div>
  );
}

export default WriteArticle;