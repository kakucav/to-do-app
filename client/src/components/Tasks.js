import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const Tasks = () => {
    return <Container className='mt-3 text-center'>
        <Row>
            <Col className='d-flex mb-3'>
                <Button>Add new task</Button>
            </Col>
        </Row>
        <Row>
            <Col className='p-1 mx-3 bg-secondary'>Tasks</Col>
            <Col className='p-1 mx-3 bg-secondary'>Active</Col>
            <Col className='p-1 mx-3 bg-secondary'>Finished</Col>
        </Row>
        <Row>
            <Col className='mx-3'>
                <h1>1</h1>
                <h1>2</h1>
            </Col>
            <Col className='mx-3'>
                <h1>2</h1>
                <h1>2</h1>
            </Col>
            <Col className='mx-3'>
                <h1>1</h1>
                <h1>2</h1>
            </Col>
        </Row>
    </Container>
}

export default Tasks;