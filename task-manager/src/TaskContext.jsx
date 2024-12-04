import { createContext, useContext } from 'react';
import { useTaskManager } from './useTaskManager';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTaskManager();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};
