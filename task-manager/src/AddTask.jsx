import { useTasks } from './TaskContext';

function AddTask() {
  const { taskInput, setTaskInput, addTask } = useTasks();

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
