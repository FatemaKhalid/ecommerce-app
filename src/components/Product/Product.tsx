import React from "react";
import { Product } from "../../types";

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
            <div className="ml-auto w-10 h-10">
              <button
                onClick={handleAddClick}
                className="rounded-t-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
              >
                <AddIcon />
              </button>
              <button
                onClick={handleRemoveClick}
                className="rounded-b-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
              >
                <RemoveIcon />
              </button>
            </div>
            {/* <AddRemoveItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function AddIcon() {
  /* TODO: Need to place it outside */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current m-auto"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function RemoveIcon() {
  /* TODO: Need to place it outside */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current m-auto"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
// function AddRemoveItem() {
//   return (
//     <div className="flex justify-center w-1/5">
//       <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//         <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
//       </svg>

//       <input
//         className="mx-2 border text-center w-8"
//         type="text"
//         defaultValue="1"
//       />

//       <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//         <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
//       </svg>
//     </div>
//   );
// }
