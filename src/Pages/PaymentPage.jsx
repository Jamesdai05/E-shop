import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import FormContainer from '../components/FormContainer';
import CheckoutComponent from "../components/CheckoutComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Slices/cartSlice.js";
import { useNavigate } from "react-router-dom";




const PaymentPage = () => {
  const [paymentMethod,setPaymentMethod]=useState("Paypal");

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const cart=useSelector(state=>state.cart)

  const handleSummit=(e)=>{
    e.preventDefault()
    console.log("payment done")
    navigate("/placeorder")
  }


  return (
    <FormContainer>
      <CheckoutComponent step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={handleSummit}>
        <Form.Group>
          <Form.Label as="legend">
            <Col>
              <Form.Check
               type="radio"
               className="my-2"
               label="Credit Card or PayPal"
               name="paymentMethod"
               value="PayPal"
               checked
               onChange={(e)=>setPaymentMethod(e.target.value)}
               >

              </Form.Check>
            </Col>
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-lg my-4">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}
export default PaymentPage