import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import BasketComponent from "./BasketComponent";
import AddProductButton from "./AddProductButton";


const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};
export default ProductList;

const FetchProduct = async ({ category }) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    <div className="grid" key={product.id}>
      <button className="col-start-1 row-start-1 flex justify-end">
        
      </button>
      <Link href={`/products/${product.id}`}>
        <div className="rounded-lg p-2 shadow-md ">
          <Image
            loading="eager"
            alt="cat"
            src={product.thumbnail} 
            width={300}
            height={200}
            className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-lg"
          />
          <div className="font-semibold tracking-wide font-stretch-extra-condensed">
            {product.title}
          </div>
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
      {/* <a href="" className="border color-light-grey shadow-2xl rounded-lg px-4 py-3 bg-gray-100 justify-center items-center grid">Læg i Kurv</a> */}
    </div>
  ));
};
