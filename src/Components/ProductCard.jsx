import React from "react";

const ProductCard = (props) => {
  return (
    <div className="m-10">
      <div className="p-4 border-2 w-80 h-70 rounded-lg text-white bg-gray-800">
        <div className="font-bold text-2xl">{props.name}</div>
        <div className="text-lg">{props.category}</div>
        <div>
          <p>₹{props.price}</p>
          <p
            className={`rounded-sm ${
              props.inStock ? "bg-green-500 w-15 px-1" : "bg-red-500 w-25 px-1"
            }`}
          >
            {props.inStock ? "InStock" : "Out of Stock"}
          </p>
        </div>
        <div>⭐ {props.rating}</div>
        <div className="border-1 p-2 mt-2 rounded-xl text-black bg-green-100">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
