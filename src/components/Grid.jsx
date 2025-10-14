import Product from "./Product";
import products from "../utils/data";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-6 max-w-[96.2%]">
      {
        products.map((product, i) => (
          <Product
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            key={i}
          />
      ))};
    </div>
  )
}

export default Grid;