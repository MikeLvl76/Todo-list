import { useState, useEffect } from "react";
import { TodoContext } from "./App";

export default function TodoProvider (props) {
    const [todos, setTodos] = useState(() => {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (text) => {
      setTodos([...todos, { id: Date.now(), text: text}]);
    }
    
    const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  
    const removeAll = () => {
      setTodos([]);
      localStorage.clear();
    }
    
    return (
      <TodoContext.Provider value={{ todos, addTodo, removeTodo, removeAll }}>
        {props.children}
      </TodoContext.Provider>
    );
  }