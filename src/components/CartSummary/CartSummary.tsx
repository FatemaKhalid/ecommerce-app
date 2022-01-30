import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { CartItems } from "../../types";

export function CartSummary() {
  const cItems = useRecoilValue(CartItems);
  const items = useMemo(() => Array.from(cItems.entries()), [cItems]);
  const totalPrice = useMemo(
    () =>
      items
        .reduce(
          (acc, entry) =>
            (acc += entry[1].quantity * entry[1].recommendedRetailPrice),
          0
        )
        .toFixed(2),
    [items]
  );
  const totalCount = useMemo(
    () => items.reduce((acc, entry) => (acc += entry[1].quantity), 0),
    [items]
  );
  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items: {totalCount}
        </span>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalPrice}</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}
