const Receipt = ({ item }) => {
  return (
    <li key={item.id} className="flex justify-between items-center bg-custom-rose-50/40 p-5 first:rounded-t-[6px] last:rounded-b-[6px]">
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <img src={item.image.thumbnail} alt={item.name} className="max-w-1/4 w-full" />
          <div className="flex flex-col gap-[0.3rem]">
            <p className="font-bold text-[0.9rem] text-custom-rose-900">{item.name}</p>
            <p className="font-bold text-custom-rose-600">{item.quantity}x <span className="text-custom-rose-900/65 text-[0.8rem] font-medium"> @ PHP{item.price}</span> </p>
          </div>
        </div>
        <span className="text-custom-rose-900 text-[0.8rem] font-bold">PHP{(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </li>
  )
}

export default Receipt;