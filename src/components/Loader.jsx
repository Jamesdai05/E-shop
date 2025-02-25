import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  const style={
    width:"150px",
    height:"150px",
    margin:"auto",
    display:"block",
    // justifyContent:"center",
    // alignItems:"center"
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status" style={style} />
    </div>
  );
}
export default Loader