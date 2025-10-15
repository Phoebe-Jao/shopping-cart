const Notice = ({ image, altTxt, message }) => {
  return (
    <div className="w-full bg-custom-green/25 rounded-small py-4 flex justify-center items-center gap-2">
      <img src={image} alt={altTxt} />
      <span dangerouslySetInnerHTML={{ __html: message }} className="text-custom-rose-900 text-[0.85rem]"></span>
    </div>
  )
}

export default Notice;