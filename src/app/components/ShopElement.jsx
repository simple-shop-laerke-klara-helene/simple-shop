"use client";
import useStore from "../store/shop";
import { FaRegStar, FaStar } from "react-icons/fa6";

const ShopEle = ({ id }) => {
  const { shop, toggleshop } = useStore();

  console.log(shop);
  if (shop.includes(id)) {
    console.log("shop:", id);
    return (
      <FaStar size={25} color={"#FFD700"} onClick={() => toggleshop(id)} />
    );
  } else {
    console.log("Not shop:", id);
    return (
      <FaRegStar size={25} color={"gray"} onClick={() => toggleshop(id)} />
    );
  }
};

export default ShopEle;
