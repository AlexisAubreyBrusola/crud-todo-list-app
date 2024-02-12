import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({
  todoList,
  deleteTask,
  completeTask,
  toggleEdit,
  saveEditedTask,
}) => {
  const [editedTaskName, setEditedTaskName] = useState('');

  const handleEditChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleEditStart = (task) => {
    setEditedTaskName(task.taskName); // Initialize editedTaskName with the current task's name
    toggleEdit(task.id);
  };

  return (
    <div className='todoList-container'>
      {todoList.map((task) => (
        <div key={task.id}>
          {task.isEditing ? (
            <div className='task'>
              <input
                type='text'
                value={editedTaskName}
                onChange={handleEditChange}
              />
              <button
                className='task-btn'
                onClick={() => saveEditedTask(task.id, editedTaskName)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className='task'>
              <h1 className={task.taskStatus ? 'task-completed' : null}>
                {task.taskName}
              </h1>
              <button className='task-btn' onClick={() => deleteTask(task.id)}>
                ❌
              </button>
              <button
                className='task-btn'
                onClick={() => completeTask(task.id)}
              >
                ✅
              </button>
              <button
                className='task-btn'
                onClick={() => handleEditStart(task)}
              >
                ✍️
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  saveEditedTask: PropTypes.func.isRequired,
};

export default TodoList;
