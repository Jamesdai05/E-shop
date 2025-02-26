import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import CheckoutComponent from "../components/CheckoutComponent.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useCreateOrdersMutation } from "../Slices/orderSlice.js";
import { clearCartItems } from "../Slices/cartSlice.js";

const PlaceOrder = () => {

  const navigate=useNavigate()

  const cart=useSelector(state=>state.cart)

  // if one of this change,
  useEffect(()=>{
    if(!cart.shippingAddress.address){
      navigate("/shipping")
    }else if(!cart.paymentMethod){
      navigate("/payment")
    }
  },[cart.paymentMethod,cart.shippingAddress.address,navigate])



  return (
    <>
      <CheckoutComponent step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city},{cart.shippingAddress.postCode},{cart.shippingAddress.country}
              </p>

            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
}
export default PlaceOrder