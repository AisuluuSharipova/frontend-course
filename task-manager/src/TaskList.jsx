import React from 'react';
import { useTasks } from './TaskContext';

function TaskList() {
  const { tasks, deleteTask } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => deleteTask(task)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
