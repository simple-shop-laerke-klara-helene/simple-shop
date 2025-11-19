import Link from "next/link";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import { Suspense } from "react";

export default function Home({ params }) {
  return (
    <>
      <header className="col-[full] grid  mb-10 grid-cols-subgrid">
       
          <Header />

      </header>
      <main className="col-[full] grid ">
        <div className="grid grid-cols-subgrid grid-rows-subgrid">
          <section className="grid grid-cols-5 grid-rows-5 place-items-center">
            <Suspense fallback={<div>Loading product...</div>}>
              <HeroComponent params={params} />
            </Suspense>
          </section>
          <div className="grid row-3 col-3 justify-center content-center z-1">
            <h1 className=" bg-black/50 p-1 backdrop-blur-md py-6 px-10 rounded-lg text-white">Simple Shop</h1>
            <Link href="/products" className=" cursor-pointer border color-light-grey shadow-2xl rounded-lg px-4 py-3 bg-gray-200 mt-2 mb-5 grid items-center justify-center font-black hover:bg-gray-900 hover:text-white">
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
