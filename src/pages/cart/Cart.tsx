import { CartItemsContainer, CartSummary } from "src/components";

export function CartPage() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <CartItemsContainer />
        <CartSummary />
      </div>
    </div>
  );
}
