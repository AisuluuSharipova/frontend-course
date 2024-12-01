// useTaskManager.js
import { useState } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) {
      console.warn("Task cannot be empty.");
      return false;
    }
    const isDuplicate = tasks.some((t) => t.name === task);
    if (isDuplicate) {
      console.warn("Task with this name already exists.");
      return false;
    }
    setTasks((prevTasks) => [...prevTasks, { name: task, completed: false }]);
    return true;
  };

  const deleteTask = (taskName) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.name !== taskName));
  };

  const toggleTaskCompletion = (taskName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.name === taskName ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};
