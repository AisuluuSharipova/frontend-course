// TaskItem.jsx
function TaskItem({ task, onDelete, onToggleCompletion }) {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
        <button onClick={() => onToggleCompletion(task.name)}>
          {task.completed ? '✅' : '✔️'}
        </button>
        <button onClick={() => onDelete(task.name)}>❌</button>
      </li>
    );
  }
  
  export default TaskItem;
  