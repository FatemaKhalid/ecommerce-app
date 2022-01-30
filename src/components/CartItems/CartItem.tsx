import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartItem as ItemType, CartItems, Product } from "../../types";
import { AddRemoveItemComponent } from "../AddRemoveItem/AddRemoveItem";

export type CartItemProps = {
  product: Product;
};

export function CartItem({ product }: CartItemProps) {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-md">{product.name}</span>
          <span className="font-bold text-gray-500 text-sm">
            {product.brandName}
          </span>
          <span className="text-gray-500 text-xs">{product.categoryName}</span>
          <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a>
        </div>
      </div>
      <AddRemoveItemComponent product={product} direction="row" />
      <span className="text-center w-1/5 font-semibold text-sm">
        {product.recommendedRetailPrice}
        {product.recommendedRetailPriceCurrency}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {product.recommendedRetailPrice * 1}
        {product.recommendedRetailPriceCurrency}
      </span>
    </div>
  );
}
