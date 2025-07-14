import React, { useState } from "react";
import ProductRender from "./ProductRender";
import products from "../constants/data";
import NewProductCard from "./NewProductCard";

const ProductFilter = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <div>
      ProductFilter
      <div>
        <input
          className="border-2 p-2 m-2 rounded-lg"
          type="text"
          placeholder="Search Here..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button onClick={handleSearch} className="border-2 p-2 m-2 rounded-lg">
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {products.map((data) => (
          <NewProductCard
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

export default ProductFilter;
