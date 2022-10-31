import React from 'react';
import './App.css';
import { Input } from './components/Input';
import { Task } from './components/Task';

function App() {
  return (
    <>
        <h1 className="header">TODOS</h1>
        <Input />
        <Task label={'Сделать тестовое'}/>
    </>
  );
}

export default App;
