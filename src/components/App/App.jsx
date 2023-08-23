//IMPORTS
import React from 'react';
import Header from '../Header/Header';
import TaskSection from '../TaskSection/TaskSection';
import InputTaskSection from '../InputTaskSection/InputTaskSection';
import './App.css';
import axios from 'axios';

import {useState, useEffect} from 'react';

function App () {

  let [taskToDo, setTaskToDo] = useState('');
  let [taskComplete, setTaskComplete] = useState(false);
  let [taskArray, setTaskArray] = useState([]);

// fetch the list of tasks from the server
const fetchTasks = () => {
  axios.get('/todo/')
  .then((response) => {
    console.log(response.data);
    setTaskArray(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
} // END GET

  // DELETE Route
  const deleteTask = (id) => {
    axios.delete(`/todo/${id}`)
    .then((response) => {
      console.log(response)
      fetchTasks();
    })
    .catch((error) => {
      console.log(error);
    })
  } // END DELETE

  //PUT Route
  const toggleComplete = (id) => {
    axios.put(`/todo/toggle/${id}`)
    .then((response) => {
      console.log(response)
      fetchCreatures();
    })
    .catch((error) => {
      console.log(error);
    })
  } // END PUT 

  // On Load, call the fetchTasks() fuction
  useEffect(() => {
    fetchTasks()
  }, [])


  const addTask = (newTaskTodo) => {
      console.log(`The task is: ${newTaskTodo.task}, Task Complete: ${newTaskTodo.complete}`);
      // create POST request to add this new task to the database
      axios.post(`/todo/`, {task : newTaskTodo.task, complete: newTaskTodo.complete})
      .then( (response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  
      setTaskToDo('')
      setTaskComplete('')
    } // END POST


  return (
    <div className='App'>
      <Header />
      <InputTaskSection addTask={addTask} />
      <TaskSection taskArray={taskArray} deleteTask={deleteTask} toggleComplete={toggleComplete} />

    </div>
  );

}

export default App
