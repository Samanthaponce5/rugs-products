import React from "react";
import productList from '../data/product-list.json'
import Product from "./Product";

const ProductGrid = () => {

    return (
        <div className="product_grid">
            {productList.cart.map((product, index)=>{
                return <Product key={index} product={product} />
            })}
        </div>
    )
}

export default ProductGrid