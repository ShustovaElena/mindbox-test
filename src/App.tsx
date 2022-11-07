import React from 'react';
import './App.css';
import { Input } from './components/Input';
import { Task } from './components/Task';
import { ButtonGroup } from './components/ButtonGroup';

function App() {
  return (
    <>
        <h1 className="header">TODOS</h1>
        <Input />
        <ButtonGroup />
        <Task label={'Сделать тестовое'}/>
    </>
  );
}

export default App;
