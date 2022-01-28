import Layout from "../components/Layout";
import { Product } from "../types";
import { ProductsPage } from "./products/Products";
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
  return (
    <Layout>
      <ProductsPage />
    </Layout>
  );
}

export default HomePage;
