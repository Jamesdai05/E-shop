import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import CheckoutComponent from "../components/CheckoutComponent.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";


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
        <Col md={8}>Column</Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
}
export default PlaceOrder