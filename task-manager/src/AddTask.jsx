function AddTask({ taskInput, setTaskInput, addTask }) {
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
  