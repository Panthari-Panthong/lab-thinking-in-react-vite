import React, { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [inputsName, setInputsName] = useState("");

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar inputsName={inputsName} setInputsName={setInputsName} />
      <ProductTable productsList={products} inputsName={inputsName} />
    </div>
  );
};

export default ProductsPage;
