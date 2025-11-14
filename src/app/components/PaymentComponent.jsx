"use client";
import useCartStore from "../store/shop";
import Link from "next/link";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);
  const remove = useCartStore((state) => state.removeFromCart);

if (cart.length === 0) return <p>Kurven er tom</p>;

  return (
    <div className="grid">
      <h1 className="font-semibold mb-2">Kurv</h1>

      {cart.length === 0 && <p>Kurven er tom</p>}

      {cart.map((item) => (
        <div key={item.id} className="border-b py-2">
          <p className="font-semibold">{item.title}</p>
          <p>{item.price} kr</p>
          <p>Antal: {item.quantity}</p>

           <div className="flex items-center gap-2 mt-1">
            <button onClick={() => decrease(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increase(item.id)}>+</button>
          </div>
          <button
            onClick={() => remove(item.id)}
            className="text-red-500 text-sm mt-1"
          >
            Fjern
          </button>
<Link href="/payment" className="border bg-gray-200 items-center justify-center grid shadow-lg">
Go to Payment
</Link>
           
        </div>
       
      ))}
    </div>
  );
}