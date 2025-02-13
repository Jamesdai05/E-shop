// import { useEffect, useState } from "react";
import Productslist from "../components/Productslist";
import products from "../products";


const Home = () => {


  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // fetch data from backend

  return (
    <>
      <h1>Latest Products</h1>
      <Productslist products={products} style={style} />
    </>
  );
};

export default Home;
