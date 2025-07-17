import { useState } from "react";
import ProductRender from "./ProductRender";

const ProductFilter = () => {
  const [searchText, setSearchText] = useState("");

  const displaySearchText = () => {
    console.log(searchText);
  };

  return (
    <div>
      ProductFilter
      <div>
        <input
          className="border-2 rounded-lg p-2 m-2"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={displaySearchText}
          className="border-2 rounded-lg p-2 m-2"
        >
          Search
        </button>
      </div>
      <ProductRender />
    </div>
  );
};

export default ProductFilter;
