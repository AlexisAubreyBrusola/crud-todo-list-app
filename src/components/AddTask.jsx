import PropTypes from 'prop-types';

const AddTask = ({ setNewTask, addTask, newTask }) => {
  return (
    <div className='addTask-container'>
      <h1 className='title'>To-Do List</h1>
      <input
        type='text'
        placeholder='Add a task'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

AddTask.propTypes = {
  setNewTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};

export default AddTask;
