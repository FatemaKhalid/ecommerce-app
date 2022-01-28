
export function fetchProducts(page?: number) {
  const reqUrl = `http://localhost:3000/api/products${
    page ? `?page=${page}` : ""
  }`;
  return fetch(reqUrl);
}