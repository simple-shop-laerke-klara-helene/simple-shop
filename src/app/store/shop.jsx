import { create } from "zustand";
import { persist } from "zustand/middleware";

// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

const useStore = create(
  persist(
    (set, get) => ({
      shop: [],
      toggleshop: (product) => {
        const current = get().shop;
        const exists = current.includes(product);
        set({
          shop: exists
            ? current.filter((fav) => fav !== product) // Remove if exists
            : [...current, product], // Add if doesn't exist
        });
      },
    }),
    {
      name: "shop-storage",
    },
  ),
);

export default useStore;
