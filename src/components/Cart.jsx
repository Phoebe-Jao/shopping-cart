import illust from '../assets/images/illustration-empty-cart.svg';

const Cart = () => {
  return (
    <div className="min-h-72 h-full w-full max-w-96 mx-auto bg-white rounded rounded-small p-6 pb-10 flex flex-col items-center">
      <h3 className="text-2xl text-custom-maroon font-bold self-start">Your Cart (0)</h3>
      <img src={illust} alt="Empty carty" className="pt-10 pb-4" />
      <p className="text-[0.8rem] text-custom-rose-600 font-bold">Your added items will appear here</p>
    </div>
  )
}

export default Cart;