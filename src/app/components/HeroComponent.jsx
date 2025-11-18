import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import BasketComponent from "./BasketComponent";
import AddProductButton from "./AddProductButton";

const ProductList = ({ category, search }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} search={search} />
    </Suspense>
  );
};
export default ProductList;

const FetchProduct = async ({ category }) => {
  const url = "https://dummyjson.com/products/";

  const response = await fetch(url);
  // const { products } = await response.json();
  const data = await response.json();
  const products = data.products || [];

  return products.map((product) => <Image loading="eager" alt="cat" src={product.thumbnail} width={300} height={200} className="w-20 grid justify-center content-center z-0 opacity-70 " key={product.id} />);
};
