import ProductCard from "./ProductCard";
import products from "../constants/data";
import { useState } from "react";

const ProductRender = () => {
  const [searchText, setSearchText] = useState("");
  const [sortByValue, setSortByValue] = useState();

  const clearSearchText = () => {
    setSearchText("");
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortByValue === "HighToLow") {
      return b.price - a.price;
    } else if (sortByValue === "LowToHigh") {
      return a.price - b.price;
    }
    return 0;
  });

  const sortedPriceData = (e) => {
    setSortByValue(e.target.value);
  };

  return (
    <div>
      Product Render
      {sortByValue}
      <div className="flex justify-between">
        <div>
          <input
            className="border-2 rounded-lg p-2 m-2"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={clearSearchText}
            className="border-2 rounded-lg p-2 m-2"
          >
            Clear
          </button>
        </div>
        <div className="">
          <div className="border-2 rounded-lg p-1 m-2">
            <select onChange={sortedPriceData} className="">
              <option value="">Sort by</option>
              <option value="HighToLow">Price: High to Low</option>
              <option value="LowToHigh">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {sortedProducts.map((data) => (
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
