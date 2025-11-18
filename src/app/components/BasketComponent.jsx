// "use client";
// import useStore from "../store/shop";
// import { FaRegStar, FaStar } from "react-icons/fa6";

// const BasketComponent = ({ id }) => {
//   const { shop, toggleshop } = useStore();

//   console.log(shop);
//   if (shop.includes(id)) {
//     console.log("shop:", id);
//     return (
//       <FaStar size={25} color={"#FFD700"} onClick={() => toggleshop(id)} />
//     );
//   } else {
//     console.log("Not shop:", id);
//     return (
//       <FaRegStar size={25} color={"gray"} onClick={() => toggleshop(id)} />
//     );
//   }
// };

// export default BasketComponent;

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
    <div className="fixed top-40 right-4 w-64 bg-white shadow-lg rounded-xl flex flex-col max-h-96">
      {/* Header - altid synlig */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Kurv</h2>
        <hr />
      </div>

      {/* Scrollable product list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {cart.length === 0 && <p>Kurven er tom</p>}

        {cart.map((item) => (
          <div key={item.id} className="border-b pb-2 bg-gray-200 rounded-lg p-3">
            <div className="flex justify-between">
              <h3 className="font-semibold mb-0">{item.title}</h3>
              <p>{item.price} €</p>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="gap-2 flex">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
              <button onClick={() => remove(item.id)} className="">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer - altid synlig */}
      <div className="p-4 border-t">
        <Link href="/payment" className="w-full text-center border border-black  py-2 rounded-lg shadow grid">
          Go to Payment
        </Link>
      </div>
    </div>
  );
}

// "use client";
// import useCartStore from "../store/shop";

// const AddToCartButton = ({ product }) => {
//   const addToCart = useCartStore((state) => state.addToCart);
//   const cart = useCartStore((state) => state.cart);

//   // Check om produkt allerede i kurv
//   const existing = cart.find((item) => item.id === product.id);

//   return (
//     <button
//       onClick={() => addToCart(product)}
//       className={`px-4 py-2 rounded ${
//         existing ? "bg-green-500 text-white" : "bg-black text-white"
//       }`}
//     >
//       {existing ? "Tilføjet" : "Læg i kurv"}
//     </button>
//   );
// };

// export default AddToCartButton;
