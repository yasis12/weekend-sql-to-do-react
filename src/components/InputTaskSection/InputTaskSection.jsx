//IMPORTS
import React, { useState} from 'react';
import './InputTaskSection.css';


function InputTaskSection({addTask}) {

    let [taskToDo, setTaskToDo] = useState('');
    let [taskComplete, setTaskComplete] = useState(false);


    const handleSubmit = (evt) => {
      // evt.preventDefault();
        console.log(`The task is: ${taskToDo}, Task Complete: ${taskComplete}`);
        
        const newTaskTodo = {
          task: taskToDo,
          complete: taskComplete
        } 
        
        addTask(newTaskTodo)
    
        setTaskToDo('')
        setTaskComplete('')
      } // END POST

return (

    <div>
        <h4>Add Task</h4>
            <form onSubmit={handleSubmit}>
            <label>Task: </label>
            <input onChange={ (evt) => setTaskToDo(evt.target.value)}   />
            <button type="submit" >Add</button>
            </form>
    </div>
    
)
} // END InputTaskSection

export default InputTaskSection; 