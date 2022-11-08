import React from 'react';
import './App.css';
import { InputField } from './components/Input';
import { ButtonGroup } from './components/ButtonGroup';
import { TaskGroup } from './components/TaskGroup';

function App() {
  return (
    <>
        <h1 className="header">TODOS</h1>
        <InputField />
        <ButtonGroup />
        <TaskGroup />
    </>
  );
}

export default App;
