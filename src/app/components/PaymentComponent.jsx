"use client";
import shop from "../store/shop";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const cart = shop((state) => state.cart);
  const increase = shop((state) => state.increaseQuantity);
  const decrease = shop((state) => state.decreaseQuantity);
  const remove = shop((state) => state.removeFromCart);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="mt-4 grid">
      <h1 className="font-semibold mb-2">Basket</h1>

      <div className="grid grid-cols-[1fr_auto] gap-2">
        <div className="">
          {cart.length === 0 && (
            <div className="bg-gray-200 grid justify-center items-center rounded-lg my-4 h-90">
              <h1 className="justify-center items-center">The basket is empty</h1>
            </div>
          )}

          {cart.map((item) => (
            <div className="grid grid-cols-[auto_1fr] border-b pb-2 bg-gray-200 rounded-lg my-4">
              <Image loading="eager" alt="cat" src={item.thumbnail} width={300} height={200} className="rounded-lg w-50" />

              <div key={item.id} className="p-6 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h2 className="font-semibold mb-0 text-2xl">{item.title}</h2>
                  <h2>{item.price} €</h2>
                </div>

                <div className="">
                  <h3 className="font-semibold mb-0 text-2xl">{item.brand}</h3>
                  <h3>{item.shippingInformation}</h3>
                </div>

                <div className="flex items-center gap-2 justify-between">
                  <div className="gap-2 flex">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>
                  <a onClick={() => remove(item.id)} className=" cursor-pointer bg-gray-200 shadow-lg rounded-lg px-3 py-2 hover:bg-gray-400">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 rounded-lg p-6 w-70 h-90 my-4 flex flex-col gap-5 sticky top-0">
          <h2>Subtotal: {subtotal.toFixed(2)} €</h2>
          <h2>Delivery: 0,00 €</h2>
          <hr />
          <h2>Total: {subtotal.toFixed(2)} €</h2>

          <a className="shadow-lg rounded-lg hover:bg-gray-300 bg-white px-4 py-3 mt-auto">Go to payment</a>
        </div>
      </div>
    </section>
  );
}
