//IMPORTS
import React, { useState, useEffect } from 'react';
import './TaskSection.css';
import axios from 'axios';

function TaskSection() {
  let [taskArray, setTaskArray] = useState([]);

    // On Load, call the fetchTasks() fuction
    useEffect(() => {
      fetchTasks()
    }, [])

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



  // Return (this displays on the page)
  return (
<ul>
{taskArray.map(taskToDo =>
        (<li key={taskToDo.name} class = {taskToDo.complete ? 'complete' : 'notComplete'}>
          {taskToDo.task} 
          <button onClick={() => toggleComplete(taskToDo.id)} >✔</button>
          <button onClick={() => deleteTask(taskToDo.id)} >Delete</button>
        </li>
        ))}
</ul>
  

  ); //end return

} // end TaskSection Function

export default TaskSection;