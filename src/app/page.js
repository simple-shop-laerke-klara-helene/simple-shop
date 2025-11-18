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
          <h1 className=" pb-2 font-bold mb-4">SimpleShop!</h1>
          <Link href="/products" className=" cursor-pointer border color-light-grey shadow-2xl rounded-lg px-4 py-3 bg-gray-200 mt-2 mb-5">
            Browse Products
          </Link>
        </div>
      </main>
    </>
  );
}
