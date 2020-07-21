import React from "react";

import Task, { TaskType } from "./Task";

import { useDispatch, useSelector } from "react-redux";
import { archiveTask, pinTask } from "../store/redux";
import { tasksState } from "../store/types";

type Props = {
  loading?: boolean;
  tasks?: TaskType[];
};

function TaskList({ loading = false, tasks: sampleTasks }: Props) {
  const dispatch = useDispatch();

  const reduxTasks = useSelector((store: tasksState) => store.tasks);

  const tasks = sampleTasks || reduxTasks;

  const events = {
    onPinTask: (id: string) => dispatch(pinTask(id)),
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">
            Take it easy for the rest of the evening.
          </div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList;
