"use client";

import { useState } from "react";
import Image from "next/image";

export default function DetailPicsComp({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div>
      <Image
        loading="eager"
        src={mainImage}
        alt={product.title}
        width={300}
        height={300}
        className="w-full rounded-lg shadow-xl"
      />

      <div className="mt-4 flex items-start gap-2">
        {product.images.map((img, index) => (
          <Image
            key={index}
            loading="eager"
            src={img}
            alt={`Thumbnail ${index + 1}`}
            width={90}
            height={90}
            onClick={() => setMainImage(img)}
            className={`cursor-pointer rounded-lg shadow-xl transition-transform hover:scale-105 ${
              mainImage === img ? "ring-dark-text ring-2" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
