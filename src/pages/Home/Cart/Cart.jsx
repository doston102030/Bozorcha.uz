import { useSelector } from 'react-redux'

function Cart() {

  const cartProduct = useSelector(state => state.products)

  console.log(cartProduct)

  return <div>

  </div>
}

export default Cart
