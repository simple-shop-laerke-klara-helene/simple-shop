
import Header from "@/app/components/Header";
import { Suspense } from "react";

export default function detail({ params }) {

  return (
   <>
    <header>
      <Header />
    </header>

     <main>
         <Suspense fallback={<div>Loading product...</div>}>
      
         </Suspense>
    </main>
    </>
  );
}
