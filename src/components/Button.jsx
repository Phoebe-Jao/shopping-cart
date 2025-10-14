import { useState } from 'react'
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import minusIcon from '../assets/images/icon-decrement-quantity.svg';
import plusIcon from '../assets/images/icon-increment-quantity.svg';

const Button = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddCart = () => setQuantity(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);

  const handleDecrement = () => {
    if (quantity === 1) {
      setQuantity(0);
    } else {
      setQuantity(prev => prev - 1);
    }
  }

  return (
    <>
      {
        quantity === 0 ? (
          <button onClick={handleAddCart} className="w-32 absolute bottom-[-2.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white rounded-4xl border-1 border-custom-maroon text-[0.8rem] text-custom-rose-900 font-bold p-3 cursor-pointer">
            <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[1.5rem]'>
              <img src={cartIcon} alt="cart" />
            </span>
            <span className='pl-5'>Add to cart</span>
          </button>
        ) :
        (
          <div className="flex justify-between items-center w-32 absolute bottom-[-2.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-custom-maroon rounded-4xl border-1 border-custom-maroon text-[0.8rem] text-white font-bold p-3">
            <button onClick={handleDecrement} className="w-3 h-3 flex justify-center cursor-pointer">
              <img src={ minusIcon } alt="minus" />
            </button>
            { quantity }
            <button onClick={handleIncrement}  className="w-3 h-3  flex justify-center cursor-pointer">
              <img src={ plusIcon } alt="plus" />
            </button>
          </div>
        )
      }
    </>
  )
}

export default Button;