import AddToCartButton from "./AddToCartButton";

const Product = ({ product }) => {
  return (
    <div>
      <div className="relative">
        <img 
          src={product.image.thumbnail} 
          srcSet={`${product.image.thumbnail} 480w, ${product.image.mobile} 768w, ${product.image.tablet} 1024w, ${product.image.desktop} 1440w`} 
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1440px"
          alt={product.name}
          className="rounded rounded-small"
        />
        <AddToCartButton product={product} />
      </div>
      <div className="pt-6 pb-3">
        <p className="text-[0.9rem] text-custom-rose-500 font-bold">{product.category}</p>
        <p className="text-custom-rose-900 font-bold">{product.name}</p>
        <p className="text-custom-rose-600 font-bold">${product.price}</p>
      </div>
    </div>
  )
}

export default Product;