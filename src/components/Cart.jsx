import illust from '../assets/images/illustration-empty-cart.svg';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, cartCount } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-72 h-full w-full max-w-96 mx-auto bg-white rounded rounded-small p-6 pb-10 flex flex-col items-center">
      <h3 className="text-2xl text-custom-maroon font-bold self-start">Your Cart ({cartCount})</h3>
      {
        cartItems.length === 0 ? (
          <>
            <img src={illust} alt="Empty carty" className="pt-10 pb-4" />
            <p className="text-[0.8rem] text-custom-rose-600 font-bold">Your added items will appear here</p>
          </>
        ) : (
          <>
            <ul>
              {
                cartItems.map(item => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} = PHP {(item.price * item.quantity).toFixed(2)}
                  </li>
              ))}
            </ul>
            <p>PHP { totalPrice.toFixed(2) }</p>
          </>
        )
      }
    </div>
  )
}

export default Cart;