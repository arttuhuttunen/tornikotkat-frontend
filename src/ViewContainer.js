import React, { Component } from "react"
import { Container } from "react-bootstrap"
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap';



class ViewContainer extends Component {
    
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">Tornikotkat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="esittely">Esittely</Nav.Link>
                    <Nav.Link href="lippukunta">Lippukunta</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
                <Container>{this.props.children}</Container>
            </div>
        )
    }
}

export default ViewContainer