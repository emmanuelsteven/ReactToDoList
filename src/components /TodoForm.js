import React, { useEffect }from 'react';
import {v4 as uuidv4} from 'uuid';
// import { useEffect } from 'react';

const TodoForm = ({input, setInput, todos, setTodos, editTodos,setEditTodo}) => {
    const updateTodo = (title, id,completed) =>{
        const newTodo = todos.map((todo) =>{
            todo.id === id ? {title, id, completed} :todo
        })
        setTodos(newTodo); 

        setEditTodo("");
    };

    useEffect(() =>{
        if (editTodos){ 
        setInput(editTodos.title);
    } else {
        setInput ("")
    }
    }, [setInput, editTodos]);
    const onInputChange = (event) => {
        setInput(event.target.value);
         
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodos){
            
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo (input,editTodo.id,editTodos.completed)
        }
        }; 

  return (
    <form onSubmit={onFormSubmit} >
        <input type="text" placeholder="Enter a task..." className="task-input"  value = {input} required
        onChange={onInputChange}
         />
        <button className='button-add' type='submit' >
            Add
        </button>
    </form>
  );
};

export default TodoForm;
