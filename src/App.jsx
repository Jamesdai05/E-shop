import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Productlist from "./components/Productslist";
import products from "./products";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Product/> */}
      <main className="py-3">
        <Container>
          <Productlist products={products} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
