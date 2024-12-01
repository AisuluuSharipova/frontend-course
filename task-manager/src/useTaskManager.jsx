import { useState } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) {
      console.warn("Task cannot be empty.");
      return false; // Возвращаем false, если задача пустая
    }

    const isDuplicate = tasks.includes(task);
    if (isDuplicate) {
      console.warn("Task with this name already exists.");
      return false; // Возвращаем false, если задача уже существует
    }

    setTasks((prevTasks) => [...prevTasks, task]);
    return true; // Возвращаем true, если задача успешно добавлена
  };

  const deleteTask = (task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
  };

  const getTasks = () => tasks;

  const getTask = (index) => {
    if (index >= 0 && index < tasks.length) {
      return tasks[index];
    }
    return null;
  };

  return { tasks, addTask, deleteTask, getTasks, getTask };
};
