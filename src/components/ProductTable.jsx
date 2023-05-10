import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ productsList, inputsName }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsList
          .filter((product) => {
            if (product.name.toLowerCase().includes(inputsName.toLowerCase())) {
              return product;
            }
          })
          .map((product) => {
            return (
              <ProductRow
                name={product.name}
                price={product.price}
                inStock={product.inStock}
                key={product.id}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
