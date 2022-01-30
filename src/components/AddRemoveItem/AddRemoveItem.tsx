import React, { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartItems, ItemQuantitySelector, Product } from "../../types";

type AddRemoveItemProps = {
  product: Product;
  direction?: "col" | "row";
};

export function AddRemoveItemComponent({
  product,
  direction,
}: AddRemoveItemProps) {
  const dir = direction ?? "col";
  const cItems = useRecoilValue(CartItems);

  const [item, quantityOnChange] = useRecoilState(
    ItemQuantitySelector(product?.gtin)
  );

  function handleAddClick() {
    quantityOnChange({ ...product, quantity: item.quantity + 1 });
  }
  function handleRemoveClick() {
    quantityOnChange({ ...product, quantity: item.quantity - 1 });
  }
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val = event.target.value;
    quantityOnChange({ ...product, quantity: +val });
  }
  return (
    <div className={`ml-auto flex ${`flex-${dir}`}`}>
      <button
        onClick={handleAddClick}
        className="rounded-t-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
      >
        <AddIcon />
      </button>
      {dir === "row" ? (
        <input
          className="mx-2 border text-center w-8"
          type="number"
          value={cItems.get(product.gtin)?.quantity}
          onChange={handleOnChange}
        />
      ) : null}
      <button
        onClick={handleRemoveClick}
        className="rounded-b-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
      >
        <RemoveIcon />
      </button>
    </div>
  );
}

function AddIcon() {
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
