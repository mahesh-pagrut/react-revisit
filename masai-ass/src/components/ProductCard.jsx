import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />

      <h2 className="text-lg font-semibold mb-1 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-sm text-gray-500 mb-2 capitalize">
        {product.category}
      </p>

      <div className="mt-auto">
        <p className="text-xl font-bold text-blue-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
