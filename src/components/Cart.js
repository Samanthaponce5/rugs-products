import React from 'react'
import exit from '../icons/exit.svg'
import StoreContext from '../StoreContext'
import { useContext } from 'react'

function Cart({isActive, openCart}) {
  const {  cart} = useContext(StoreContext)
  const sum = () => {
    let sum = 0
    for(let n of cart){
      sum += n.count * n.price
    }
    return sum
  }
  return (
    <div className={isActive ? 'cart opened' : 'cart'}>
      <div className="cart-inner">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={openCart}>
            <img alt='exit' src={exit} />
          </button>
        </div>

        <ul className="items">
          {cart.map((item, index) => {
            return (
              <li className='cart_items' key={index}>
                  <div>
                    <img  alt={item.name} src={item.imgUrl} />
                  </div>
                  <div className='item_info'>
                  <div>{item.name}</div>
                  <div>Quantity: {item.count}</div>
                  <div>${(item.count * item.price).toFixed(2)}</div>
                  </div>
              </li>
            )
          })}
        </ul>
        <div className="cart-footer">
          <h2>Total: ${sum().toFixed(2)}</h2>
        </div>
      </div>
    </div>
  )
}

export default Cart
