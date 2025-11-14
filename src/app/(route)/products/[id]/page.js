
import Header from "@/app/components/Header";
import { Suspense } from "react";
import DetailComp from "@/app/components/DetailComp";

export default function detail({ params }) {

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
