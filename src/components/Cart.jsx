import emptyCart from '../assets/images/illustration-empty-cart.svg';
import removeItemBtn from '../assets/images/icon-remove-item.svg';
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg';
import { useCart } from '../context/CartContext';
import Notice from './Notice';

const Cart = () => {
  const { cartItems, cartCount, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="min-h-72 h-full w-full max-w-96 mx-auto bg-white rounded rounded-small p-6 pb-10 flex flex-col items-center">
      <h3 className="text-2xl text-custom-maroon font-bold self-start mb-5.5">Your Cart <span className="tracking-wide">({cartCount})</span></h3>
      {
        cartItems.length === 0 ? (
          <>
            <img src={emptyCart} alt="Empty cart" className="pt-10 pb-4" />
            <p className="text-[0.8rem] text-custom-rose-600 font-bold">Your added items will appear here</p>
          </>
        ) : (
          <>
            <ul className="w-full self-start">
              {
                cartItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center pb-3.5 mb-3.5 border-b-2 border-custom-rose-100 last:pb-5">
                    <div className="flex flex-col gap-[0.3rem]">
                      <p className="font-medium text-[0.9rem] text-custom-maroon">{item.name}</p>
                      <p className="text-custom-maroon">
                        {item.quantity}x 
                        <span className="text-custom-rose-400 text-[0.8rem] font-medium"> @ PHP{item.price}</span> <span className="text-custom-rose-500 text-[0.8rem] font-bold">PHP{(item.price * item.quantity).toFixed(2)}</span>
                      </p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="h-full border-2 border-custom-rose-300 rounded-full p-[0.2rem] cursor-pointer hover:brightness-75 transition-all duration-300">
                      <img src={removeItemBtn} alt="remove item" />
                    </button>
                  </li>
              ))}
            </ul>
            <div className="w-full flex justify-between items-center pt-2.5 pb-6">
              <span className="text-[0.85rem] text-custom-maroon font-medium">Order Total</span>
              <p className="text-2xl text-custom-maroon font-bold">PHP { getTotalPrice() }</p>
            </div>
            <Notice
              image={carbonNeutralIcon}
              altTxt={"This is a carbon-neutral delivery"}
              message={"This is a <strong>carbon-neutral</strong> delivery"}
            />
          </>
        )
      }
    </div>
  )
}

export default Cart;