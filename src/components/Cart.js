import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import {emptyCart} from '../utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(emptyCart())
  }
  return (
    <div className="flex justify-center mt-6">
      <div className="container flex flex-col gap-6 p-0 md:px-60">
        <div class="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-xl">Cart</h1>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={clearCart}>Clear Cart</button>
          <div className="flex flex-col shadow-xl border-b">
            <ItemList items={cartItems} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Cart