import Link from "next/link";

const Header = () => {
  return (
    <section className="grid grid-cols-subgrid col-[full] justify-between font-semibold cursor-pointer p-4  bg-gray-300 mb-10">
      <div className="grid col-[content]">
        <div className="flex gap-10 mt-5  items-center">
          <Link href="/">
            <h2>Home</h2>
          </Link>

          <Link href="/products">
            <h2>Products</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
