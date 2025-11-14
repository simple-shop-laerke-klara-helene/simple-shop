import Header from "@/app/components/Header";
import { Suspense } from "react";
import DetailComp from "@/app/components/DetailComp";

export default function detail({ params }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <Header />
      </header>

      <main className="col-[full]">
        <section className="row-gap-2 col-[full] mt-12 grid grid-cols-[inherit]">
          <Suspense fallback={<div>Loading product...</div>}>
            <DetailComp params={params} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
