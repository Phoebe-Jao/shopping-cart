import AddToCartButton from "./AddToCartButton";

const Product = ({ product }) => {
  return (
    <div>
      <div className="relative">
        <img 
          src={product.image.thumbnail} 
          srcSet={`${product.image.thumbnail} 480w, ${product.image.mobile} 768w, ${product.image.tablet} 1024w, ${product.image.desktop} 1440w`} 
          sizes="(max-width: 100%) 480px, (max-width: 100%) 768px, (max-width: 1024px) 1024px, 1440px"
          alt={product.name}
          className="rounded rounded-small max-sm:w-full"
        />
        <AddToCartButton product={product} />
      </div>
      <div className="pt-6 pb-3">
        <p className="text-[0.9rem] text-custom-rose-500 font-bold">{product.category}</p>
        <p className="text-custom-rose-900 font-bold">{product.name}</p>
        <p className="text-custom-rose-600 font-bold">PHP {product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Product;