import { Container, Nav, Navbar, Badge, NavDropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../Slices/userSlice.js";
import {logout} from "../Slices/authSlice.js"



const Header = () => {

  //get the cart items from the state
  const {cartItems}=useSelector(state=>state.cart)
  // console.log(cartItems)
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch=useDispatch();
  const navigate=useNavigate();


  // use logout mutation hook
  const [logoutApiCall]=useLogoutMutation();


  const handleLogOut=async()=>{
    try {
      // promise unwrap
      await logoutApiCall().unwrap();
      dispatch(logout());
      // direct to login page
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  const fsStyle={color:"#fff"}
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E-shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" style={fsStyle}>
              Cart <FaShoppingCart className="ms-0.5" />
              {cartItems.length > 0 && (
                <Badge pill bg="info" style={{ marginLeft: 5 }}>
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </Badge>
              )}
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={handleLogOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" style={fsStyle}>
                User <FaUser className="ms-0.5" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
