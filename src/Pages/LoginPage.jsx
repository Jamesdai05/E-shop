import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";




const LoginPage = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submitted")
  }


  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label controlId="email" className="my-3">
            Email Address:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label controlId="password" className="my-3">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="btn btn-lg mt-2">Log In</Button>
      </Form>

      <Row className="my-3">
        <Col>
          New user ? <Link to="/register">Sign Up</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
export default LoginPage