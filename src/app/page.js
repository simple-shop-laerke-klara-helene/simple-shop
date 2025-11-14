import Link from "next/link";
import Header from "./components/Header";

export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main className="col-[full] grid grid-cols-subgrid">
        <div className="col-[content] row-2">
          <h1 className=" pb-2 font-bold ">SimpleShop!</h1>
          <Link href="/products" className="mt-4 px-4 py-2 bg-black rounded-lg text-white cursor-pointer">
            Browse Products
          </Link>
        </div>
      </main>
    </>
  );
}
