export function addItemToCart(
  gtin: string,
  items: Map<string, number>,
  cb: (t: number) => void
) {
  if (items.has(gtin)) {
    const item = items.get(gtin);
    cb(item! + 1);
  } else {
    cb(1);
  }
  console.log(items);
  return items;
}

export function removeItemFromCart(gtin: string, items: Map<string, number>) {
  const item = items.get(gtin);
  if (!item) return items;
  if (item === 1) items.delete(gtin);
  else items.set(gtin, item - 1);
  console.log(items);

  return items;
}

export function setItemInCart(
  gtin: string,
  items: Map<string, number>,
  quantity: number
) {
  const item = items.get(gtin);
  if (!item) return items;
  if (quantity === 0) items.delete(gtin);
  else items.set(gtin, quantity < 0 ? 1 : quantity);
  return items;
}
