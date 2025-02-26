import { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Button, Form } from "react-bootstrap";
import { saveShippingAddress } from "../Slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





const ShippingPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address,setAddress]=useState(shippingAddress?.address || "")
  const [city,setCity]=useState(shippingAddress?.city || "")
  const [postCode,setPostCode]=useState(shippingAddress?.postCode || "")
  const [country,setCountry]=useState(shippingAddress?.country || "")

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(saveShippingAddress({address,city,postCode,country}));
    navigate("/payment")
  }



  return (
    <FormContainer>
      <h1>Shipping Info</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postcode" className="my-2">
          <Form.Label>PostCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the postCode"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          ></Form.Control>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="btn btn-lg my-4"
          // disabled={isLoading}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}
export default ShippingPage