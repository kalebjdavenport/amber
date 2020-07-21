import { TaskType } from "./../components/Task";
// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.

import { tasksState, TaskActionTypes } from "./types";
import { Reducer, createStore } from "redux";

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
  return (state: tasksState, action: TaskActionTypes): tasksState => {
    return {
      ...state,
      tasks: state.tasks.map((task: TaskType) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

const defaultTasks = {
  tasks: [
    { id: "1", title: "Something", state: "TASK_INBOX" },
    { id: "2", title: "Something more", state: "TASK_INBOX" },
    { id: "3", title: "Something else", state: "TASK_INBOX" },
    { id: "4", title: "Something again", state: "TASK_INBOX" },
  ],
  error: false,
};
// The reducer describes how the contents of the store change for each action
export const reducer: Reducer<tasksState, TaskActionTypes> = (
  state: tasksState = defaultTasks,
  action: TaskActionTypes
): tasksState => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

export default createStore(reducer);
