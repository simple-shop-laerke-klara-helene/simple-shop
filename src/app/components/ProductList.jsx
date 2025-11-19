import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AddProductButton from "./AddProductButton";

const ProductList = ({ category, search }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} search={search} />
    </Suspense>
  );
};
export default ProductList;

const FetchProduct = async ({ category, search }) => {
  let url;

  if (search) {
    url = `https://dummyjson.com/products/search?q=${search}`;
  } else if (category) {
    url = `https://dummyjson.com/products/category/${category}`;
  } else {
    url = "https://dummyjson.com/products";
  }

  const response = await fetch(url);

  const data = await response.json();
  const products = data.products || [];

  return products.map((product) => (
    <div className="grid" key={product.id}>
      <button className="col-start-1 row-start-1 flex justify-end"></button>
      <Link href={`/products/${product.id}`}>
        <div className="rounded-lg p-2 shadow-md ">
          <Image loading="eager" alt="cat" src={product.thumbnail} width={300} height={200} className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-lg" />
          <div className="font-semibold tracking-wide font-stretch-extra-condensed">{product.title}</div>
          <div className="flex justify-between">
            {product.category}
            <div className="flex justify-between">
              {product.price}
              {" €"}
            </div>
          </div>
        </div>
      </Link>
      <AddProductButton product={product} />
    </div>
  ));
};
