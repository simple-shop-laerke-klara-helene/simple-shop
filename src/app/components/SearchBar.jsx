"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const [value, setValue] = useState("");

  const handleSearch = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
     setValue("");
  };




  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        placeholder="Search products..."
        className="border color-light-grey shadow-2xl rounded-lg px-4 py-3 bg-gray-200 justify-center items-center grid mt-2 mb-5"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
}

