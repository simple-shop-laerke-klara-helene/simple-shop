import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { MdOutlineArrowBackIos } from "react-icons/md";
import BasketComponent from "./BasketComponent";

const DetailComponent = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <>
      <a href="/products">{"< tilbage"}</a>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <section className="grid grid-cols-[1fr_1fr] gap-4">
          <div>
            <Image
              loading="eager"
              src={product.thumbnail}
              alt="Cat picture"
              width={300}
              height={300}
              className="w-100 rounded-lg shadow-xl"
            />
            <div class="flex items-start justify-start gap-2">
              <Image
                loading="eager"
                src={product.thumbnail}
                alt="Cat picture"
                width={90}
                height={90}
                className="rounded-lg shadow-xl"
              />
              <Image
                loading="eager"
                src={product.thumbnail}
                alt="Cat picture"
                width={90}
                height={90}
                className="rounded-lg shadow-xl"
              />
              <Image
                loading="eager"
                src={product.thumbnail}
                alt="Cat picture"
                width={90}
                height={90}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="mt-2">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </section>
        <div>
          <BasketComponent />
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
