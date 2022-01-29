import { useEffect, useMemo, useState } from "react";
import { PaginationComponent } from "../../components/Pagination/Pagination";
import { ProductComponent } from "../../components/Product/Product";
import { ProductsResponse } from "../../types";
import { fetchProducts } from "./services/service";

export function ProductsPage() {
  const [productResponse, setProductResponse] = useState<ProductsResponse>();
  const productsList = useMemo(
    () => productResponse?.results,
    [productResponse]
  );

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then((data: ProductsResponse) => {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        setProductResponse(data);
      });
  }, []);
  return (
    <>
      <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
          Products
        </h1>
      </div>
      <div className="flex items-center">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {productsList?.map((prod) => (
            <ProductComponent key={prod.gtin} product={prod} countInCart={3} />
          ))}
        </div>
      </div>
      <PaginationComponent
        totalPages={productResponse?.count ?? 0}
        currentPage={productResponse?.page ?? 0}
      />
    </>
  );
}
