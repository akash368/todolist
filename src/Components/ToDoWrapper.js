import React, {useState} from 'react';
import { ToDoForm } from "./ToDoForm"
import {v4 as uuidv4} from 'uuid';
import { ToDo } from './ToDo';

uuidv4();
export const ToDoWrapper=()=>
{
    const[todos, setTodos] = useState([])
    const[complete, setComplete] = useState(0);
    const addTodo = todo=>
    {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo =>todo.id===id ? {...todo, completed: !todo.completed} : todo))
    }
    const deleteTodo=id=>
    {
        setComplete(complete+1);
        setTodos(todos.filter(todo=> todo.id !==id))
    }
    return(
        <div style={{backgroundColor: "#1B1A41", width: "40%"}} className="m-auto rounded-md mt-32">
            <h1 className='text-white text-2xl font-bold pt-10'>Your Tasks</h1><span className='text-white text-sm font-thin'>Don't forget to delete the task after completion</span>
            <p className='text-white'>Task completed: {complete}</p>
            <ToDoForm addTodo={addTodo}/>
            {todos.map((todo, index)=>(<ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>))}
        </div>
    )
}