import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Unmark' : 'Complete'}
        </button>
        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
