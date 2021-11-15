import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    }

    return <Container className='w-25 mt-5'>
        <Form onSubmit={handleLogin}>
            <Form.Group controlId='formEmail' className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='formPassword' className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' />
            </Form.Group>
            <Button type='submit'>Login</Button>
        </Form>
    </Container>
}

export default Login;