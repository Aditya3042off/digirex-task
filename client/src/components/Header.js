import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand>Digirex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ marginLeft: "auto" }} className="ml-auto">

                            {!userInfo ? (
                                <>
                                    <LinkContainer to="/">
                                        <Nav.Link>
                                            <i className="fas fa-user"></i> Login
                                        </Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to="/signup">
                                        <Nav.Link>
                                            <i className=" fa-solid fa-user-plus"></i> Sign Up
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                            ) :(
                                <>
                                    <LinkContainer to="/dashboard">
                                        <Nav.Link>
                                            <i className="fa-solid fa-info"></i> Dashboard
                                        </Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to="/records/search">
                                        <Nav.Link>
                                            <i className="fa-regular fa-magnifying-glass"></i> Search Records
                                        </Nav.Link>
                                    </LinkContainer>

                                    <Button variant="outline-secondary" onClick={logoutHandler}>Logout</Button>
                                </>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;