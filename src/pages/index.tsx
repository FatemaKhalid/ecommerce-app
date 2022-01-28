import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductComponent } from "../components/Product/Product";
import { Product, ProductsResponse } from "../types";
const INIT_PROD: Product = {
  name: "---",
  gtin: "",
  recommendedRetailPrice: 0,
  recommendedRetailPriceCurrency: "XXX",
  imageUrl: "",
  brandName: "-----",
  categoryName: "------",
};
function HomePage() {
  const [productsList, setProductsList] = useState<Product[]>();
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
        setProductsList(data.results);
      });
  }, []);
  return (
    <Layout>
      <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
          Products
        </h1>
      </div>
      <div className="flex items-center">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {productsList?.map((prod) => (
            <ProductComponent product={prod} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function fetchProducts(page?: number) {
  const reqUrl = `http://localhost:3000/api/products${
    page ? `?page=${page}` : ""
  }`;
  return fetch(reqUrl);
}
export default HomePage;
