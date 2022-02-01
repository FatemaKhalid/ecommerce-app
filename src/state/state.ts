import { atom } from "recoil";
import { CartItem } from "../types";

/**
 * The Global States
 */

// Global state is the items users are willing to buy which is a map with
// product gtin as key and pruduct data and quantity as value
export const CartItems = atom({
  key: "cartItemsState",
  default: new Map<string, CartItem>(),
});

export const DisplayedPage = atom({
  key: "displayedPageState",
  default: 1,
});
