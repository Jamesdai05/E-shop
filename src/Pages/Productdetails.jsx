import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../Slices/productSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
// import products from "../products";
// import axios from "axios"
// import { useEffect, useState } from "react";




const ProductDetails = () => {
    // const [product,setProduct]=useState({})

  const { id: productId } = useParams();
  // const url=`/api/products/${productId}`

  // useEffect(()=>{
  //   const productFetch=async()=>{
  //     const {data}=await axios.get(url)
  //     // console.log(data)
  //     setProduct(data)
  //   }
  //   productFetch()
  // },[productId])

  const {data:product,isLoading,error} = useGetProductDetailsQuery(productId)





  return (
    <>
      <Link className="btn btn-secondary my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error?.error}</Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <b>${product.price}</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetails;
