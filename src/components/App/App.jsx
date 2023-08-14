//IMPORTS
import React from 'react';
import Header from '../Header/Header';
import TaskSection from '../TaskSection/TaskSection';
import './App.css';

import {useState} from 'react';

function App () {
  
  return (
    <div className='App'>
      <Header />
      <TaskSection />
    </div>
  );

}

export default App
