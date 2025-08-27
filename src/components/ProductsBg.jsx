
import React from "react";

function ProductsBg({ index }) {
  // Same pastel backgrounds for shimmer image container
  const colors = [
    "bg-zinc-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
  ];
  const bgColor = colors[index % colors.length];

  return (
    <div className="transition flex flex-col animate-pulse">
      {/* Image shimmer container */}
      <div
        className={`${bgColor} flex justify-center items-center p-6 md:p-10`}
      >
        <div className="h-40 w-28 bg-gray-50 rounded"></div>
      </div>

      {/* Details shimmer section */}
      <div className="py-4 px-0 flex flex-col items-center text-center bg-white space-y-2 w-full">
        {/* Title shimmer */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>

        {/* Price/Login shimmer */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default ProductsBg;