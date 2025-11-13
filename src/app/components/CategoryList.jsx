import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const scrollFilterComponent = async () => {
  return (
    <Suspense fallback={<div className="p-4">Loading categories…</div>}>
      <FetchCategory />
    </Suspense>
  );
};

export default scrollFilterComponent;

const FetchCategory = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category, index) => (
    <CategoryElement key={index} category={category} />
  ));
};
