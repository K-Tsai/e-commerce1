import React from "react";
import ProductItem from "./ProductItem";
import withContent from "../withContext";

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className= "hero is-primary">
        <div className= "hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className='container'>
        <div className= "column columns is-multiline">
          {/* adds more column elements than you fit in a single row */}
          {products && products.length ? (
            
          )}
        </div>
      </div>
    </>
  )
}