
import Header from "./components/Header";

export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main className="col-[full] grid grid-cols-subgrid">
        <div className="col-[content]">
          <h1 className="text-3xl font-bold underline">SimpleShop!</h1>
          <button className="mt-4 rounded bg-blue px-4 py-2 text-white hover:bg-blue-600">
            Se Produkter
          </button>
        </div>
      </main>
    </>
  );
}
