import './App.css'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import StoreContext from './StoreContext'
import { useContext, useState } from 'react'

function App() {
  const {  cart } = useContext(StoreContext)
  const [isActive, setIsActive] = useState(false)
  const openCart = () => {
    setIsActive((active) => !active)
  }
  const sum = () => {
    let sum = 0
    for (let n of cart) {
      sum = sum + n.count
    }
    return sum
  }

  return (
    <div className="Main-Content page-width">
      <button className="your_cart" onClick={openCart}>
        View Cart ({sum()})
      </button>
      <ProductGrid />
      <Cart {...{openCart, isActive}}/>
    </div>
  )
}

export default App
