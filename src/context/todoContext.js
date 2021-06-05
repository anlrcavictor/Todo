import React, {createContext, useContext, useState} from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
const useTodoContext = () => useContext(TodoContext);


function TodoProvider({children}) {
    const [todos, setTodos] = useState([{id:123455, content:'Create Todo React App'}]);

    const addTodo = content => setTodos([
            ...todos,
            {
                id: v4(),
                content
            }
        ]);

    const updateTodo = (updatedTodo) => setTodos([
        ...todos.map((todo) =>{
            if(todo.id !== updatedTodo.id) return todo;
            return updatedTodo;
        })
    ]);

    const removeTodo = id => setTodos([...todos].filter(todo => todo.id !== id))


    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo, updateTodo}} >
            {children}
        </TodoContext.Provider>
    );

}

export {TodoProvider, useTodoContext};
