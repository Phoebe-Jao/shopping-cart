const Modal = ({ open, onClose, children }) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors duration-500 ${open ? 'visible bg-black/40' : 'invisible'}`}>
      <div onClick={(e) => e.stopPropagation()} className={`max-h-5/6 overflow-auto bg-white rounded-xl shadow p-6 transition-all duration-500 ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        { children }
        <button onClick={onClose} className="w-full bg-custom-maroon font-medium text-white rounded-small hover:rounded-4xl hover:bg-custom-rose-900 py-4 mt-5 cursor-pointer transition-all ease-out duration-500">
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Modal;