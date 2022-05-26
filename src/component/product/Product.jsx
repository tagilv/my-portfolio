import React from 'react'
import "./product.css"

function Product ({img, link, name}) {
  return (
      <div className="product">
        <div className="product-browser">
          <div className="product-circle-wrapper">
            <div className="product-circle"></div>
            <div className="product-circle"></div>
            <div className="product-circle"></div>
          </div>
        <p className="product-description">{name}</p>
        </div>
          {
            link
            ?
            <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="product-image" />
          </a>
          :
          <img src={img} alt="" className="product-image" />
        }
      </div>
  )
}

export default Product;
