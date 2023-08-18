//IMPORTS
import React from 'react';
import Header from '../Header/Header';
import TaskSection from '../TaskSection/TaskSection';
import InputTaskSection from '../InputTaskSection/InputTaskSection';
import './App.css';

import {useState} from 'react';

function App () {
  
  return (
    <div className='App'>
      <Header />
      <InputTaskSection />
      <TaskSection />

    </div>
  );

}

export default App
