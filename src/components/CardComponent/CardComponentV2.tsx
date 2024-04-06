import { productType } from "@/types/productTypes";
import React from "react";

export default function CardComponentV2({
  name,
  image,
  desc,
  price,
}: productType) {
  return (
    <section>
      <div className="bg-secondaryColor  rounded-lg overflow-hidden  max-w-sm">
        <div className="relative ">
          <img
            className="object-cover h-64 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transform duration-300"
            src={image}
            alt={name}
          />
          <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 truncate">{name}</h3>
          <p className="text-AscendColor text-sm mb-4 truncate">{desc}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl">${Math.floor(price)}</span>
            <button className="bg-primaryColor text-sm hover:bg-AscendColor text-secondaryColor font-bold py-2 px-4 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
