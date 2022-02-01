import React, { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartItems, ItemQuantitySelector, Product } from "../../types";
import AddIcon from "./resources/add.svg";
import RemoveIcon from "./resources/remove.svg";

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
  const setcItems = useSetRecoilState(CartItems);
  const [item, quantityOnChange] = useRecoilState(
    ItemQuantitySelector(product?.gtin)
  );

  function handleAddClick(gtin: string) {
    if (item) quantityOnChange({ ...product, quantity: item.quantity + 1 });
    else setcItems((s) => new Map(s).set(gtin, { ...product, quantity: 1 }));
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
        onClick={() => handleAddClick(product.gtin)}
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
