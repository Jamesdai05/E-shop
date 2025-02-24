import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const Header = () => {

  //get the cart items from the state
  const {cartItems}=useSelector(state=>state.cart)
  console.log(cartItems)

  const fsStyle={color:"#fff"}
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E-shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
        >
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" style={fsStyle}>
              Cart <FaShoppingCart className="ms-0.5" />
              {cartItems.length > 0 && <Badge pill bg="info" style={{marginLeft:5}}>
                {cartItems.reduce((a,c)=>a+c.qty,0)}
              </Badge>}
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={fsStyle}>
              User <FaUser className="ms-0.5" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
