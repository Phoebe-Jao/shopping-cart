import { useState } from 'react'
import minusIcon from '../assets/images/icon-decrement-quantity.svg';
import plusIcon from '../assets/images/icon-increment-quantity.svg';

const Button = () => {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleClick() {
    setIsActive(!isActive);

    return isActive;
  }

  function handleDecrement() {
    if (quantity <= 1) {
      setQuantity(0);
    } else {
      setQuantity(prev => prev - 1);
    }
  }

  function handleIncrement() {
    setQuantity(prev => prev + 1);
  }

  return (
    <button onClick={handleClick} className={`w-32 absolute bottom-[-2.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white rounded-4xl border-1 border-custom-maroon text-[0.8rem] text-custom-rose-900 font-bold p-3 ${isActive ? 'is-active' : 'cursor-pointer'}`}>
      { 
        isActive ? (
          <div className='flex justify-between items-center'>
            <span onClick={handleDecrement} className="cursor-pointer"><img src={ minusIcon } alt="minus" /></span>
            <span>{ quantity }</span>
            <span onClick={handleIncrement} className="cursor-pointer"><img src={ plusIcon } alt="plus" /></span>
          </div>
        ) : 'Add to cart' 
      }
    </button>
  )
}

export default Button;