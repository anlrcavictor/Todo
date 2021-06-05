import React, {useRef, useState} from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {useTodoContext} from "../context/todoContext";

const AddTodo = () => {
    const inputRef = useRef(null);
    const [invalid, setInvalid] = useState(false);
    const { addTodo } = useTodoContext();

    const submit = e => {
        e.preventDefault();
        if(inputRef.current.value.length <= 0){
            setInvalid(true);
            return;
        }

        addTodo(inputRef.current.value);
        setInvalid(false);
        inputRef.current.value='';
    };

    return (
        <>
            <Form onSubmit={submit} >
                <InputGroup className="mb-3" hasValidation>
                    <FormControl isInvalid={invalid} ref={inputRef} />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit" >Add</Button>
                    </InputGroup.Append>
                    <Form.Control.Feedback type="invalid">
                        Please enter a todo content.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form>
            <br/>
        </>
    );
};

export default AddTodo;
