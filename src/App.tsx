import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { TodoForm } from './components/TodoForm/TodoForm'

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <TodoForm/>
    </div>
  );
}

export default App;
