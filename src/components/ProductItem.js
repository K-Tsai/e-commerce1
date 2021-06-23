import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className= "column is-half">
      {/* column is half size */}
      <div className="box">
        {/* a simple container with white background */}
        <div className="media">
          {/* a UI element perfect for repeatable and nestable content */}
          <div className="media-left">
            <figure className="image is-64x64">
              <img 
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={product.shortDesc}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style= {{ textTransform: "captalize"}}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary is-pulled-right"
                  onClick={() =>
                    props.addToCart({
                      id: product.name,
                      product,
                      amount: 1
                    })
                  }
                >
                  Add to Cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;