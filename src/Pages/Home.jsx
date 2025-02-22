// import { useEffect, useState } from "react";
import axios from "axios";
import Productslist from "../components/Productslist";
import { useEffect, useState } from "react";
// import products from "../products";

const Home = () => {
  const [products, setProducts] = useState([]);

  // fetch data from backend
  const productsUrl = "/api/products";
  useEffect(() => {
    const dataFetching = async () => {
      const { data } = await axios.get(productsUrl);
      // console.log(data);
      setProducts(data);
    };
    dataFetching();
  }, []);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <h1>Latest Products</h1>
      <Productslist products={products} style={style} />
    </>
  );
};

export default Home;
