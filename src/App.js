import React, { useState } from 'react';
import Header from './components /Header';
import './App.css';
import TodoForm from './components /TodoForm';
import TodoList from './components /TodoList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [ editTodo, setEditTodo] = useState(null);

  return ( 
  <div className="container">
  <div className="app-wrapper">
    <div>
      <Header />
    </div>
    <div>
      <TodoForm 
      input= {input}
      setInput= {setInput}
      todos = {todos}
      setTodos = {setTodos}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}
       />
    </div>
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  </div>
</div>
);
};
 

export default App;
