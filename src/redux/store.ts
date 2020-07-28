import { createStore, combineReducers } from 'redux';
import { Reducer } from 'redux';
import { User } from '../auth/User';
import { Action, ActionType } from '../redux/actionCreators';
import { UnauthenticatedUser } from '../auth/UnauthenticatedUser';

/**
 * Returns a the current authenticated user.
 * @param state the current user (or default user if user has not logged in)
 * @param action An action that denotes an action type and a user for that action to use.
 */
export const userReducer: Reducer<User, Action<User>> 
  = (state: User = new UnauthenticatedUser(), action: Action<User>) => {
  switch (action.type) {
    case ActionType.PERSIST_USER:
      return action.payload;
    default:
      return state;
  }
}


export const addErrorReducer: Reducer<string[], Action<string>> 
  = (state: string[] = [], action: Action<string>) => {
  switch (action.type) {
    case ActionType.ADD_NEW_ERROR:
      return [...state, action.payload];
    default:
      return state;
  }
}

const reducers = combineReducers({
  userPersistence: userReducer, 
  addErrorToQueue: addErrorReducer
});
export const store = createStore(reducers);