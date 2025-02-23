import { Spinner } from "react-bootstrap";

const Loader = () => {
  const style={
    width:"150px",
    height:"150px",
    margin:"auto",
    display:"block",
  }


  return (
   <Spinner animation="border" role="status" style={style}/>
  )
}
export default Loader