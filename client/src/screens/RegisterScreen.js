import React, { useState, useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, registerStatus} = userRegister;

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (registerStatus === "SUCCESS") {
            navigate("/");
        }
    }, [registerStatus,navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            setMessage("These fields cannot be empty");
        }
         else if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else {
            setMessage("");
            dispatch(register(name, email, password));
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name" style={{ marginBottom: "10px" }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email" style={{ marginBottom: "10px" }}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password" style={{ marginBottom: "10px" }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword" style={{ marginBottom: "10px" }}>
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button style={{ marginBottom: "10px" }} type="submit" variant="outline-primary">
                    {" "}
                    Register
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Have an Account?{"  "}
                    <Link to={"/"} style={{textDecoration:"none"}}>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;
