
import Header from "@/app/components/Header";
import { Suspense } from "react";

export default async function detalje({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
   <>
    <header>
      <Header />
    </header>

     <main>
         <Suspense fallback={<div>Loading product...</div>}>
            <DetailComp params={params} />
         </Suspense>
    </main>


    </>
  );
}
