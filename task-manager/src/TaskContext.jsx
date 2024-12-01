import { createContext, useContext } from 'react';
import { useTaskManager } from './useTaskManager';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const { tasks, addTask, deleteTask, getTask, getTasks } = useTaskManager();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, getTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
