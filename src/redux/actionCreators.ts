import { User } from "../auth/User"

// Action Types
export enum ActionType {
  PERSIST_USER,
  ADD_NEW_ERROR,
}

export interface Action<T> {
  type: ActionType;
  payload: T;
}

/**
 * Returns an action that, when used with the redux store, will persist the given user
 * @param user the user to persist
 */
export const persistUser = (user: User): Action<User> => {
  return {
    type: ActionType.PERSIST_USER,
    payload: user
  }
}

/**
 * Returns an action that, when used with the redux store, will add the given error message to the 
 * queue of existing error messages.
 * @param message the error message
 */
export const addError = (message: string): Action<string> => {
  return {
    type: ActionType.ADD_NEW_ERROR,
    payload: message
  }
}