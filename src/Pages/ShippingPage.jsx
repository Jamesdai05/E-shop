import { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Button, Form } from "react-bootstrap";
import { saveShippingAddress } from "../Slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutComponent from "../components/CheckoutComponent.jsx";

const ShippingPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || "");
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutComponent step1 step2 />
      <h1>Shipping Info</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            id="address"
            autoComplete="address"
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the city"
            value={city}
            id="city"
            autoComplete="city"
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postcode" className="my-2">
          <Form.Label>PostalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the postalCode"
            value={postalCode}
            id="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the country"
            value={country}
            id="country"
            autoComplete="country"
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
};
export default ShippingPage;
