//IMPORTS
import React, { useState, useEffect } from 'react';
import './TaskSection.css';
//MUI Imports
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function TaskSection({taskArray, deleteTask, toggleComplete}) {
  

  // Return (this displays on the page)
  return (
    <div className="task-section-container">
<ul >
{taskArray.map(taskToDo =>(
        <li key={taskToDo.name} className={`list-item ${taskToDo.complete ? 'complete' : 'notComplete'}`}>
          <div className="task-container"> 
          <div className="task-text">{taskToDo.task}</div>
          <Stack spacing={1} direction="row">
            <Button variant="outlined" size="small" onClick={() => toggleComplete(taskToDo.id)} >Done</Button>
            <Button variant="outlined" size="small" onClick={() => deleteTask(taskToDo.id)} >Delete</Button>
            </Stack>
          </div>
        </li>
        ))}
</ul>
  </div>

  ); //end return

} // end TaskSection Function

export default TaskSection;