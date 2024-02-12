// App.jsx file
import './App.css';
import { useState } from 'react';

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: new Date().getTime(),
        taskName: newTask,
        taskStatus: false,
        isEditing: false, // Initialize isEditing as false for a new task
      };

      setTodoList([...todoList, newTaskObject]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(updatedTodoList);
  };

  const completeTask = (taskId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === taskId ? { ...task, taskStatus: !task.taskStatus } : task
      )
    );
  };

  const toggleEdit = (taskId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === taskId ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const saveEditedTask = (taskId, editedTaskName) => {
    console.log('Edited Task Name:', editedTaskName);
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === taskId
          ? { ...task, taskName: editedTaskName, isEditing: false }
          : task
      )
    );
  };

  return (
    <main className='main-container'>
      <AddTask setNewTask={setNewTask} addTask={addTask} newTask={newTask} />
      <TodoList
        todoList={todoList}
        deleteTask={deleteTask}
        completeTask={completeTask}
        toggleEdit={toggleEdit}
        saveEditedTask={saveEditedTask}
      />
    </main>
  );
}

export default App;
