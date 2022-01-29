import React from "react";
import { Product } from "../../types";
import { AddRemoveItemComponent } from "../AddRemoveItem/AddRemoveItem";

export type ProductProps = {
  product: Product;
  countInCart?: number;
};
export function ProductComponent({ product, countInCart }: ProductProps) {
  const {
    name: productName,
    gtin,
    recommendedRetailPrice,
    recommendedRetailPriceCurrency,
    imageUrl,
    brandName,
    categoryName,
  } = product;

  function handleAddClick() {}

  function handleRemoveClick() {}

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img
            src={imageUrl}
            alt={productName}
            className="h-64 ml-auto mr-auto"
          />
        </figure>
        <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
          <div>
            <h5 className="text-white text-xl font-bold">{productName}</h5>
            <div>
              <span className="text-md text-gray-400 leading-none">
                {brandName} - {categoryName}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg text-white font-light">
              {recommendedRetailPriceCurrency} {recommendedRetailPrice}
            </div>
            {countInCart && countInCart > 0 ? (
              <div className="rounded-lg justify-around items-center bg-gray-900 text-white w-7 h-7 flex ml-auto">
                {countInCart}
              </div>
            ) : null}
            <AddRemoveItemComponent
              handleAddClick={handleAddClick}
              handleRemoveClick={handleRemoveClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
