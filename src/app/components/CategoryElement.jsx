"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    // <div onClick={() => router.push(`?category=${category}`)}>{category}</div>
    // <Link on href={`/detalje/${product.id}`} key={product.id}>
    //   <ul className="flex snap-x gap-4 overflow-x-auto p-4">
    <li
      onClick={() => router.push(`?category=${category}`)}
      className="flex flex-0 snap-start items-center gap-2 rounded-[50px] border border-[#CACACD] bg-white px-6 py-3 text-center hover:cursor-pointer hover:bg-[#EDA8B3]"
    >
      <div className="relative h-8 w-8 overflow-hidden rounded-full">
        <Image
          loading="eager"
          alt="billede"
          src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="whitespace-nowrap capitalize">{category}</h3>
    </li>
    //   </ul>
    // </Link>
  );
};

export default CategoryElement;
