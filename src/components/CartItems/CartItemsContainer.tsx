import { useRecoilValue } from "recoil";
import { CartItems, Product } from "../../types";
import { CartItem } from "./CartItem";

export function CartItemsContainer() {
  const cItems = useRecoilValue(CartItems);

  return (
    <div className="w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{cItems.size} Items</h2>
      </div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
          Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
          Total
        </h3>
      </div>
      {Array.from(cItems.entries()).map((entry) => (
        <CartItem key={entry[0]} product={entry[1]} />
      ))}
    </div>
  );
}
