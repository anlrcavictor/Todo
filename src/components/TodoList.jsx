import React from "react";
import {useTodoContext} from "../context/todoContext";
import Todo from "./Todo";




const TodoList = () => {
    const { todos } = useTodoContext()

    return (
        <div>
            { todos.map( todo => <Todo key={todo.id} todo={todo}/>) }
        </div>
    );
}

export default TodoList;
