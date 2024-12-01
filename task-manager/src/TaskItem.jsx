function TaskItem({ task, onDelete }) {
    return (
      <li>
        {task}
        <button onClick={() => onDelete(task)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;