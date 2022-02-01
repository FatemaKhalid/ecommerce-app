import { useEffect, useMemo, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { PaginationComponent } from "../../components/Pagination/Pagination";
import { ProductComponent } from "../../components/Product/Product";
import { CartItems, DisplayedProducts, ProductsResponse } from "../../types";
import { fetchProducts } from "./services/service";

export function ProductsPage() {
  const [productResponse, setProductResponse] = useState<ProductsResponse>();
  const [pageNum, setPageNum] = useRecoilState(DisplayedProducts);

  const productsList = useMemo(
    () => productResponse?.results,
    [productResponse]
  );
  const pageCount = useMemo(
    () => (productResponse?.count ?? 1) / 20,
    [productResponse]
  );
  const cItems = useRecoilValue(CartItems);

  useEffect(() => {
    fetchProducts(pageNum)
      .then((response) => {
        return response.json();
      })
      .then((data: ProductsResponse) => {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        setProductResponse(data);
        setPageNum(data.page);
      });
  }, [pageNum]);
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
            <ProductComponent
              key={prod.gtin}
              product={prod}
              countInCart={cItems.get(prod.gtin)?.quantity}
            />
          ))}
        </div>
      </div>
      <PaginationComponent
        totalPages={pageCount}
        currentPage={productResponse?.page ?? 0}
      />
    </>
  );
}
