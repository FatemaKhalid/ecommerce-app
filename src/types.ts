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
  default: new Map<string, number>(),
});

export const ItemQuantitySelector = selectorFamily<number, string>({
  key: "itemQuantitySelector",
  get:
    (gtin: string) =>
    ({ get }) => {
      const cart = get(CartItems);
      const g = cart?.get(gtin);
      g === undefined && get(CartItems).set(gtin, 1);
      return cart?.get(gtin)!;
    },
  set:
    (gtin: string) =>
    ({ set }, newValue) =>
      set(CartItems, (prevState) => {
        const newMap = new Map(prevState);
        const num = Number(newValue);
        if (num === 0) newMap.delete(gtin);
        else newMap.set(gtin, num);
        console.log(newMap);
        return newMap;
      }),
});
