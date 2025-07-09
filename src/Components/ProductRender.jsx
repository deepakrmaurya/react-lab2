import ProductCard from "./ProductCard";
import products from "../constants/data";

const ProductRender = () => {
  return (
    <div>
      Product Render
      <div className="flex flex-wrap">
        {products.map((data) => (
          <ProductCard
            key={data.id}
            name={data.name}
            category={data.category}
            price={data.price}
            inStock={data.inStock}
            rating={data.rating}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRender;
