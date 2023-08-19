import "bootstrap/dist/css/bootstrap.css";
import { Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Login from "./login";

import { Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "antd/dist/reset.css";
import "../App.css";
import "../index.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setValue(true);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing up:", error, error.code);
      });
  };

  return (
    <>
      {value ? (
        <Login />
      ) : (
        <>
          <h1 className="big-heading">Sign up</h1>
          <div className="main-div">
            <Form onSubmit={handleClick}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      type="password"
                      placeholder="Enter your Password"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button variant="primary" className="cool-button" type="submit">
                  Submit
                </Button>
              </div>
              <h2 className="msg">Already a user? Log in with:</h2>
              <Button
                onClick={() => {
                  setValue(true);
                }}
                className="btn btn-primary custom-button"
              >
                Log In
              </Button>
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
