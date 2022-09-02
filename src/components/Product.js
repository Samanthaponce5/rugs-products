import React from 'react'
import StoreContext from '../StoreContext'
import { useContext } from 'react'

function Product({ product }) {

  const { addProduct, productsInCart, removeProduct } = useContext(StoreContext)
  return (
    <div className="product">
      <div className='product_img_wrap'>
        <img alt={product.name} src={product.imgUrl} />
      </div>
      <div className="product_info">
        <div>{product.name}</div>
        <div style={{color:'grey'}}>{product.collection}</div>
        <div style={{fontWeight:"bold"}}>${(product.price).toFixed(2)}</div>
        <div>Cart count: {productsInCart(product.product) ? productsInCart(product.product) : 0}</div>
        <button onClick={()=>addProduct(product)}>Add</button>
        <button onClick={()=>removeProduct(product.product)}>Remove</button>
      </div>
    </div>
  )
}

export default Product
