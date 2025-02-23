// import { useEffect, useState } from "react";
// import axios from "axios";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import Productslist from "../components/Productslist";
import { useGetProductsQuery } from "../Slices/productSlice.js";

// import { useEffect, useState } from "react";
// import products from "../products";

const Home = () => {
  const {data:products,isLoading,error} = useGetProductsQuery()
  /*const [products, setProducts] = useState([]);

  // fetch data from backend
  const productsUrl = "/api/products";
  useEffect(() => {
    const dataFetching = async () => {
      const { data } = await axios.get(productsUrl);
      // console.log(data);
      setProducts(data);
    };
    dataFetching();
  }, []); */

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {isLoading ? (<Loader />) : error ? (<Message variant="danger">{error?.data?.message || error?.error}</Message>) :(
        <>
          <h1>Latest Products</h1>
          <Productslist products={products} style={style} />
        </>
      )}
    </>
    // <>
    //   <h1>Latest Products</h1>
    //   <Productslist products={products} style={style} />
    // </>
  );
};

export default Home;
