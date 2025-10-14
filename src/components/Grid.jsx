import Product from "./Product";
import products from "../utils/data";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-[96.2%] max-sm:max-w-full">
      {
        products.map(product => (
          <Product
            product={product}
            key={product.id}
          />
      ))};
    </div>
  )
}

export default Grid;