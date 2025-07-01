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

      <div className="mt-auto flex justify-center p-1 rounded-md space-x-2">
        <div className="text-sm flex items-center font-bold px-3 py-2 text-white bg-slate-400 rounded-md">
          <span className="text-yellow-300">$</span>&nbsp;{product.price}
        </div>
        <div className="text-sm font-bold px-3 py-2 text-white bg-slate-400 rounded-md">
          {product.category}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
