import { atom, selector, selectorFamily } from "recoil";

export type Product = {
  name: string;
  gtin: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  brandName: string;
  categoryName: string;
};

/**
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /api/products
 */
export type ProductsResponse = {
  count: number;
  page: number;
  results: Product[];
};

/**
 * The response type of /api/products/[gtin].
 */
export type ProductResponse = Product;

/**
 * The Global State for user cart
 */

export type CartItem = Product & { quantity: number };
// Global state is the items users are willing to buy which is a map with
// product gtin as key and pruduct data and quantity as value
export const CartItems = atom({
  key: "cartItemsState",
  default: new Map<string, CartItem>(),
});

export const ItemQuantitySelector = selectorFamily<CartItem, string>({
  key: "itemQuantitySelector",
  get:
    (gtin: string) =>
    ({ get }) => {
      const cart = get(CartItems);
      const item = cart?.get(gtin);
      return item!;
    },
  set:
    (gtin: string) =>
    ({ set }, newValue) =>
      set(CartItems, (prevState) => {
        const newMap = new Map(prevState);
        const item = <CartItem>newValue;
        if (item.quantity === 0) newMap.delete(gtin);
        else newMap.set(gtin, item);
        return newMap;
      }),
});
