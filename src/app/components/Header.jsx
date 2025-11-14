import Link from "next/link";

const Header = () => {
  return (

    <section className="grid col-[full] justify-between h-15 font-semibold cursor-pointer p-10 top-0 bg-blue-300 ">
      <div className="flex justify-between gap-10 items-center">
        <Link href="/">    
          <h2 className="pb-8" >Home</h2>
        </Link>

        <Link href="/products">  
          <h2 className="pb-8">Products</h2>
        </Link>
        </div>
    </section>
  );
};

export default Header;
