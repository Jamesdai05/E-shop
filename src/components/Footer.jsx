import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer>
      <Container>
        <Row className="py-3 text-center footer">
          <Col>
            <p>E-shop &copy;{year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
