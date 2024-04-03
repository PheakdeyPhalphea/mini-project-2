import fetchData from "@/Data/fetchData";
import CardComponent from "@/components/CardComponent/CardComponent";
import CardComponentV2 from "@/components/CardComponent/CardComponentV2";
import CategoryComponent from "@/components/CategoryComponent";

import { productType } from "@/types/productTypes";
import Link from "next/link";

export default async function Home() {
  const proItems2 = await fetchData(2);
  const proItems1 = await fetchData(1);
  return (
    <main>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
        Our Category
      </div>
      <section className="w-[90%] mx-auto ">
        <CategoryComponent />
      </section>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
        Our Collection
      </div>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-[80px] ">
        {proItems2.map((item: productType) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <CardComponentV2
              image={item.image}
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          </Link>
        ))}
      </section>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-[80px] ">
        {proItems1.map((item: productType) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <CardComponentV2
              image={item.image}
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
