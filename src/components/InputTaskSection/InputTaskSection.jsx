//IMPORTS
import React, { useState} from 'react';
import './InputTaskSection.css';
//MUI Imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
            <form onSubmit={handleSubmit}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
              }}
              noValidate
              autoComplete="off"
              onChange={ (evt) => setTaskToDo(evt.target.value)}
            >
            <TextField id="outlined-basic" label="Add Task" variant="outlined" />
            </Box>
            <Button variant="contained" size="small" type="submit" >Add</Button>
            </form>
    </div>
    
)
} // END InputTaskSection

export default InputTaskSection; 