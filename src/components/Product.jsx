import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Product = () => {
  return (
    <Card style={{width:"25rem"}}>
      <Card.Img variant="top" src="images/alexa.jpg" />
      <Card.Body>
        <Card.Title><b>Card title</b></Card.Title>
        <Card.Text as="div">
          rating of product
        </Card.Text>
        <Card.Text as="h3">price</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
