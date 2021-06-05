import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <>
            <section>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                           <Container>
                               <Row className="justify-content-md-center">
                                <Image src="todo.png" fluid />
                               </Row>
                            </Container>
                            <br/>
                            <AddTodo/>
                            <TodoList/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default App;







