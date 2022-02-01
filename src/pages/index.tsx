import Layout from "../components/Layout";
import { ProductsPage } from "./products/Products";

function HomePage() {
  return (
    <Layout>
      <ProductsPage />
    </Layout>
  );
}

export default HomePage;
