"use client";
import { useRouter } from "next/navigation";

const CategoryElm = ({ category }) => {
  const router = useRouter();
  return (
    <li
      className="bg-button [scroll-snap-align: center;] flex shrink-0 basis-[min(150px,90%)] content-center items-center justify-center rounded-full border-b-gray-300 p-1 cursor-pointer "
      onClick={() => router.push(`?category=${category}`)}
    >
      <div>{category}</div>
    </li>
  );
};

export default CategoryElm; 
