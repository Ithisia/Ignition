import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <center><img src="/assets/images/IgnitionLogo1.png" /></center>
                                <h3>An eclectic menagerie of heavy metal, tribal, medieval, jungle, fusion, with leather and steel.</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto menuicon" href="/"><img src="/assets/images/logo11.png" width="30" alt="Ignition" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link menuitem" to="/home">
                                        <i className="fa fa-home fa-lg" />Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link menuitem" to="/directory">
                                        <i className="fa fa-list fa-lg" />Performer Profiles
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link menuitem" to="/aboutus">
                                        <i className="fa fa-info fa-lg" />About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link menuitem" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" />Contact and Book Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header; 