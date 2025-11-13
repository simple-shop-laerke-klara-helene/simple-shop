import Footer from "./components/Footer";
import { Suspense } from "react";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";

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
        {/* <div className="grid grid-cols-2 gap-3 p-4">
       
        </div> */}

        <Suspense>
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
      </main>
      {/* <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer> */}
    </>
  );
}
//2556 x 1179

async function ProductListContainer({ searchParams }) {
  const {category} = await searchParams;
  console.log(category)
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <ProductList category={category} />
    </div>
  );
}