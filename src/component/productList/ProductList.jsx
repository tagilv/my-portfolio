import React from 'react';
import "./productList.css";
import Product from "../product/Product";

function ProductList() {
  return (
    <div className="productList">
      <div className="productList-texts">
        <h1 className="productList-title">Put title here</h1>
        <p className="productList-description">
          Put description here
        </p>
      </div>
      <div className="productList-list">
        <Product />
      </div>
    </div>
  )
}

export default ProductList
