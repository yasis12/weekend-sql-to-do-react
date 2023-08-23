//IMPORTS
import React, { useState, useEffect } from 'react';
import './TaskSection.css';

function TaskSection({taskArray, deleteTask, toggleComplete}) {
  

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