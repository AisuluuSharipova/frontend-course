import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
