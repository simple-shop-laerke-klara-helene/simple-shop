
import { Suspense } from "react";
import ProductList from "@/app/components/ProductList";
import CategoryList from "@/app/components/CategoryList";
import Header from "@/app/components/Header";
import BasketComponent from "@/app/components/BasketComponent";

export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <Header />
      </header>

      <main className="col-[full]">
        <section className="row-gap-2 col-[full] grid grid-cols-[inherit]">
          <ul className="col-[full] flex snap-x snap-mandatory justify-between gap-5 overflow-x-auto px-[max(1rem,calc(50%-var(--content-width)/2))] pb-4">
            <CategoryList />
          </ul>
        </section>
    <section className="grid grid-cols-[1fr-auto]  gap-4">
        <Suspense>
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
  
        <BasketComponent/>
    </section>
      </main>

     
    
    </>
  );
}


async function ProductListContainer({ searchParams }) {
  const {category} = await searchParams;
  console.log(category)
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-6 p-4 grid-row-subgrid">
      <ProductList category={category} />
    </div>
  );
}