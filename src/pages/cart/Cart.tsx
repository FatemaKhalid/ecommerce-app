import { CartItemsContainer } from "../../components/CartItems/CartItemsContainer";
import { CartSummary } from "../../components/CartSummary/CartSummary";

type CartPageProps = {};

export function CartPage({}: CartPageProps) {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <CartItemsContainer />
        <CartSummary />
      </div>
    </div>
  );
}
