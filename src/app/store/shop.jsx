// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// // HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// // HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// // HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

// const useStore = create(
//   persist(
//     (set, get) => ({
//       shop: [],
//       toggleshop: (product) => {
//         const current = get().shop;
//         const exists = current.includes(product);
//         set({
//           shop: exists
//             ? current.filter((fav) => fav !== product) // Remove if exists
//             : [...current, product], // Add if doesn't exist
//         });
//       },
//     }),
//     {
//       name: "shop-storage",
//     },
//   ),
// );

// export default useStore;

// import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cart: [],

//   addToCart: (product) =>
//     set((state) => {
//       const existing = state.cart.find((item) => item.id === product.id);

//       if (existing) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }

//       return {
//         cart: [...state.cart, { ...product, quantity: 1 }],
//       };
//     }),

//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          // hvis produktet findes → øg quantity
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // ellers tilføj med quantity 1
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      increaseQuantity: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decreaseQuantity: (id) => {
        set({
          cart: get().cart
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

export default useCartStore;
