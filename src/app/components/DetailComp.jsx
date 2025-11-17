import DetailPicsComp from "./DetailPicsComp";
import BasketComponent from "./BasketComponent";
import { FaStar, FaRegStar } from "react-icons/fa";

const DetailComponent = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <>
      <a href="/products" className="hover:text-dark-text cursor-pointer">
        {"< tilbage"}
      </a>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <section className="grid grid-cols-[1fr_1fr] gap-4">
          <DetailPicsComp product={product} />
          <div className="mt-2">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </section>
        <div>
          <BasketComponent />
        </div>
      </div>
      <div class="mt-16 flex items-center">
        <div class="h-2 w-2 rounded-full bg-black"></div>

        <div class="h-0.5 flex-1 bg-black"></div>

        <div class="h-2 w-2 rounded-full bg-black"></div>
      </div>
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <h1 className="text-lg leading-none font-semibold">Reviews:</h1>
          <div className="flex items-center">{renderStars(product.rating)}</div>
        </div>
        <div className="mt-12 flex justify-between">
          {product.reviews.map((review, index) => (
            <div key={index} className="mb-16">
              <div className="mb-4 flex">{renderExactStars(review.rating)}</div>
              <h2 className="text-gray-600">"{review.comment}"</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.round(rating);
    return filled ? (
      <FaStar key={i} className="text-yellow-400" size={40} />
    ) : (
      <FaRegStar key={i} className="text-yellow-400" size={40} />
    );
  });
};
const renderExactStars = (rating) => {
  return Array.from({ length: rating }, (_, i) => (
    <FaStar key={i} className="text-yellow-400" size={40} />
  ));
};

export default DetailComponent;
