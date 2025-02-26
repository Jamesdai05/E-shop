import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.jsx";
import { setCredentials } from "../Slices/authSlice.js";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../Slices/userSlice.js";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registration, { isLoading }] = useRegistrationMutation();
  //get the user from the state
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchPara = new URLSearchParams(search);
  // retrieve the query parameter redirect and fallback value
  const redirect = searchPara.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  // add the email focus when page is loaded
  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate the form
    if (!email || !password || !name || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if(password !== confirmPassword){
      toast.error("Passwords do not match!");
      return;
    }else{
      try {
        const res = await registration({
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err?.error);
      }
    }
    // console.log(email, password);
  };

  // console.log(localStorage.getItem("userInfo"))

  return (
    <FormContainer>
      <h1>Sign Up</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="my-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="name" className="my-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="reenter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="btn btn-lg my-4"
          disabled={isLoading}
        >
          Log In
        </Button>
        {isLoading && <Loader />}
      </Form>

      <Row className="py-3">
        <Col>
          New user ?{" "}
          <Link
            className="fw-bold"
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          >
            Sign Up
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default RegisterPage;
