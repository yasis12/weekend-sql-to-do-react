//IMPORTS
import React, { useState, useEffect } from 'react';
import './TaskSection.css';
import axios from 'axios';

function TaskSection() {
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

  const addTask = (evt) => {
    // evt.preventDefault();
    console.log(`The task is: ${taskToDo}, Task Complete? ${taskComplete}`);
    
    // create POST request to add this new task to the database
    axios.post(`/todo/`, {task : taskToDo, complete: taskComplete})
    .then( (response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setTaskToDo('')
    setTaskComplete('')
  }

  // On Load, call the fetchTasks() fuction
  useEffect(() => {
    fetchTasks()
  }, [])

  // Return (this displays on the page)
  return (
<ul>
{taskArray.map(taskToDo =>
        (<li key={taskToDo.name}>
          {taskToDo.task} Complete? {taskToDo.complete}
        </li>
        ))}
</ul>
  

  ); //end return

} // end TaskSection Function

export default TaskSection;