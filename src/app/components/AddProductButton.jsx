"use client";
import useCartStore from "../store/shop";

export default function AddToCartButton({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <a
      onClick={() => addToCart(product)}
  className="border color-light-grey shadow-2xl rounded-lg px-4 py-3 bg-gray-200 justify-center items-center grid mt-2 mb-5 cursor-pointer"
    >
      Add to basket
    </a>
  );
}
