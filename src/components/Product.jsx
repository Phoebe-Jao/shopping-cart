import Button from "./Button";

const Product = ({ image, name, category, price }) => {
  return (
    <div>
      <div className="relative">
        <img 
          src={image.thumbnail} 
          srcSet={`${image.thumbnail} 480w, ${image.mobile} 768w, ${image.tablet} 1024w, ${image.desktop} 1440w`} 
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1440px"
          alt={name}
          className="rounded rounded-small"
        />
        <Button />
      </div>
      <div className="pt-6 pb-3">
        <p className="text-[0.9rem] text-custom-rose-500 font-bold">{category}</p>
        <p className="text-custom-rose-900 font-bold">{name}</p>
        <p className="text-custom-rose-600 font-bold">${price}</p>
      </div>
    </div>
  )
}

export default Product;