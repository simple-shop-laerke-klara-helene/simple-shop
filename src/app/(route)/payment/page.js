
import Header from "@/app/components/Header";
import { Suspense } from "react";
import PaymentComponent from "@/app/components/PaymentComponent";

export default function detail({ params }) {

  return (
   <>
    <header className="grid col-[full] grid-cols-subgrid">
      <Header />
    </header>

     <main>
         <PaymentComponent />
    </main>
    </>
  );
}
