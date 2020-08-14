import DocumentBuilder from "../../documents/DocumentBuilder";
import { SetStateAction, Dispatch } from "react";

/**
 * Note that the type for the done property is the same type that is returned by `useState(...)`.
 * Specifically, the 2nd return of `useState(...)`, is what should be passed in for `done`.
 */
export interface DocumentCreationInputProps {
  documentBuilder: DocumentBuilder;
  done: Dispatch<SetStateAction<boolean>>;
}

/**
 * A React component that can be used as part of the document creation process must implement this
 * interface to promise this behavior.
 */
export default interface DocumentCreationInput {
  ({documentBuilder, done}: DocumentCreationInputProps): JSX.Element;
}