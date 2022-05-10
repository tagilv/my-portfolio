import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="productList">
      <div className="productList-texts">
        <h1 className="productList-title">See some of my work</h1>
        <p className="productList-description">
          Put description here
        </p>
      </div>
      <div className="productList-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList
