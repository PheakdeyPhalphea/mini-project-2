import getProById from "@/Data/getProductById/getProById";
import DetailCardComponent from "@/components/DetailCardComponent";
import React from "react";
export type Params = {
  params: {
    id: string | number;
  };
};
export async function generateMetadata({ params }: any) {
  const id = params.id;
  const product = await getProById(id);
  return {
    title: product?.name,
    describe: product.desc,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function page({ params }: Params) {
  const id = params.id;
  const resItem = await getProById(id);
  return (
    <DetailCardComponent
      category={resItem.category}
      desc={resItem.desc}
      image={resItem.image}
      price={resItem.price}
      name={resItem.name}
    />
  );
}
