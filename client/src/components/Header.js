import React from 'react';
import {Navbar, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>To-Do App</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                    <Link to='/login' className='me-4'>
                        <Button>Login</Button>
                    </Link>
                    <Link to='/register'>
                        <Button>Register</Button>
                    </Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Header;