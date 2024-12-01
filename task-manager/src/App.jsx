import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <TaskProvider>
      <div>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
