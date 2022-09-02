import React, { useState, createContext } from 'react'

const StoreContext = createContext()

export function StoreProvider({ children }) {
    const [cart, setCart] = useState([])
  

  const addProduct = (product) => {
    if (cart.some((item) => item.product === product.product)) {
      setCart((current) =>
        current.map((item) => {
          if (item.product === product.product) {
            return { ...item, count: item.count + 1 }
          } else {
            return item
          }
        }),
      )
    } else {
      product['count'] = 1
      setCart((current) => [...current, product])
    }
  }

  const removeProduct = (id) => {
    for (let cItem of cart) {
      if (cItem.product === id) {
        if (cItem.count > 1) {
          setCart((current) =>
            current.map((item) => {
              if (item.product === id) {
                return { ...item, count: item.count - 1 }
              } else {
                return item
              }
            }),
          )
        } else {
          setCart((c) => c.filter((item) => item.product !== id))
        }
      }
    }
  }
  const productsInCart = (id) => {
    for (let item of cart) {
      if (item.product === id) {
        return item.count
      }
    }
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        removeProduct,
        productsInCart
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
