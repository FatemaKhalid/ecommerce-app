import { selectorFamily } from "recoil";
import { CartItem } from "../types";
import { CartItems } from "./state";

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
