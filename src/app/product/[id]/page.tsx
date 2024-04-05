import getProById from "@/Data/getProductById/getProById";
import DetailCardComponent from "@/components/DetailCardComponent";
import React from "react";
export type Params = {
  params: {
    id: string | number;
  };
};
export default async function page({ params }: Params) {
  const id = params.id;
  const resItem = await getProById(id);
  return <DetailCardComponent category={resItem.category} image={resItem.image} price={resItem.price} name={resItem.name} />;
}
