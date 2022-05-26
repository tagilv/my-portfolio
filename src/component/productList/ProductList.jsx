import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="ProductList-container">
      <div className="productList">
        <div className="productList-texts">
          <h1 className="productList-title">See some of my work below</h1>
          <p className="productList-description">
          {/* Add Comment */}
          </p>
        </div>
        <div className="productList-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
