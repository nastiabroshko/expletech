import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carosel from './Carosel';
import AboutMe from './AboutMe';
import TaskDescription from './TaskDescription';
import logo from '../img/expletech_logo.png';
import '../styles/navbar.css';
import AddPost from './AddPost';

export default function NavbarTask() {
    return (
        <div className='main'>
            <Navbar bg="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home"> <img src={logo} width="120" height="50" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href ="/">Carosel</Nav.Link>
                            <Nav.Link href="/aboutme">About me</Nav.Link>
                            <Nav.Link href="/taskdescription">TaskDescription</Nav.Link>
                            <AddPost></AddPost>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container'>
                <Router>
                <Routes>
                    <Route path="/" element={<Carosel />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/taskdescription" element={<TaskDescription />} />
                </Routes>
                </Router>
            </div>
        </div>
    )
}
