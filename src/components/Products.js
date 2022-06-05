import React from "react";
import {useSelector} from 'react-redux'
import ProductDetail from "./ProductDetail";

function Products() {
    const products = useSelector(state => state.billgates.items)
    console.log(products);
  return (
    <React.Fragment>
  {products.map(product => (
      <ProductDetail key={product.id} product={product} />
  ))}
    </React.Fragment>
  );
}

export default Products;
