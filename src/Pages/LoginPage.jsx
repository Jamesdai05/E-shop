import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.jsx";
import { setCredentials } from "../Slices/authSlice.js";
import { useLoginMutation } from "../Slices/userSlice.js";
import { toast } from "react-toastify";




const LoginPage = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email, password)
  }


  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label controlid="email" className="my-2">
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
          <Form.Label controlid="password" className="my-2">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="btn btn-lg my-4">Log In</Button>
      </Form>

      <Row className="py-3">
        <Col>
          New user ? <Link className="fw-bold" to="/register">Sign Up</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
export default LoginPage