import React, {useRef, useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useTodoContext} from "../context/todoContext";

const Todo = ({todo}) => {
    const inputRef = useRef();
    const {removeTodo, updateTodo} = useTodoContext();
    const [editable, setEditable] = useState(false);
    const [content, setContent] = useState(todo.content);

    const makeEditable = () => {
        setEditable(true);
        inputRef.current.focus();
    };

    const update = () => {
        const id = todo.id;
        updateTodo({id, content});
        setEditable(false);
    };

    return (
        <InputGroup className="mb-3">
            <FormControl  ref={inputRef} value={content} onClick={makeEditable} onChange={event => setContent(event.target.value)} onBlur={update} readOnly={!editable}/>
            <InputGroup.Append>
                <Button variant="outline-danger" onClick={() => removeTodo(todo.id)}>Delete</Button>
                <InputGroup.Checkbox  />
            </InputGroup.Append>
        </InputGroup>
    );
};

export default Todo;



