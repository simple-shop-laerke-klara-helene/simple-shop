
import Image from "next/image";

import { Suspense } from "react";

export default async function detalje({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense fallback={<div>Loading product...</div>}>

      <div className="">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={800}
          height={400}
          priority
          className="w-full rounded-2xl object-cover"
        />
        </div>
    </Suspense>
  );
};
