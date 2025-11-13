import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import FavoritElm from "./FavoritElm";
import { MdOutlineArrowBackIos } from "react-icons/md"

const DetailComponent = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <>
      <div className="justify-items-center p-4">
        <div className="grid">
          <FavoritElm id={product.id} className="color-white z-1 col-5 row-1 m-5 w-7 justify-items-end rounded-full bg-black/20 p-1 backdrop-blur-md"/>
          <Image
            loading="eager"
            src={product.thumbnail}
            alt="Cat picture"
            width={300}
            height={300}
            className="z-0 col-start-1 col-end-6 row-start-1 row-end-4 grid w-100 rounded-2xl shadow-xl"
          />
          {/* <div className="z-0 col-start-1 col-end-6 row-start-1 row-end-4 grid h-85 w-80 justify-center rounded-4xl bg-amber-200"></div> */}
          <Link href="/" className="z-1 col-1 row-1">
            <MdOutlineArrowBackIos
              color="black"
              width={50}
              height={50}
              className="color-white z-1 col-1 row-1 m-5 w-7 rounded-full bg-black/20 p-1"
            />
          </Link>

          <div className="align-center z-1 col-start-1 col-end-4 row-3 m-5 flex w-fit justify-center gap-2 self-start rounded-2xl bg-black/20 px-4 py-2 backdrop-blur-md">
            <Image
              loading="eager"
              src={product.thumbnail}
              alt="Cat picture"
              width={300}
              height={300}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="grid items-center text-white">{product.brand}</p>
          </div>
        </div>
      </div>

      <div className="col-[content] grid p-4">
        <h1>{product.title}</h1>
        <ul className="flex gap-1 pb-3">
          {product.tags.map((tag) => {
            return (
              <li
                key={tag.id || tag}
                className="bg-button-blue text-text rounded-full px-3 py-1"
              >
                {tag.tags}
              </li>
            );
          })}
        </ul>
        ;
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          tempora dolor est ipsa id aut deleniti libero earum debitis ad
          voluptates, sed nobis maiores quas fugiat natus dolorem veniam!
          Reprehenderit!
        </p>
        <h3 className="text-neutral-500">Dato</h3>
        <a
          href="#"
          className="bg-button grid content-center rounded-full px-5 py-3"
        >
          By /(name)/
        </a>
      </div>
    </>
  );
};

export default DetailComponent;
