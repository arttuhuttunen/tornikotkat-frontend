import React, { Component } from "react"
import {Navbar, Container, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';



class ViewContainer extends Component {
    
    render() {
        return (
            <div>
                <Navbar >
                    <Navbar.Brand>
                        <Link to="/"> Tornikotkat</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Link to="esittely">Esittely </Link>
                        <Link to="lippukunta">Lippukunta </Link>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                     {this.props.children}
                </Container>
            
            </div>
        )
    }
}

export default ViewContainer