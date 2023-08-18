//IMPORTS
import React, { useState} from 'react';
import './InputTaskSection.css';
import axios from 'axios';

function InputTaskSection() {

    let [taskToDo, setTaskToDo] = useState('');
    let [taskComplete, setTaskComplete] = useState(false);


    const addTask = (evt) => {
        console.log(`The task is: ${taskToDo}, Task Complete: ${taskComplete}`);
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
      } // END POST
return (

    <div>
        <h4>Add Task</h4>
            <form onSubmit={addTask}>
            <label>Task: </label>
            <input onChange={ (event) => setTaskToDo(event.target.value)}   />
            <button type="submit" >Add</button>
            </form>
    </div>
    
)
} // END InputTaskSection

export default InputTaskSection;