import { BASE_URL } from "@/constants/Base_URl";


export default async function getProById(id: string | number) {
  const res = await fetch(`${BASE_URL}${id}`);
  const bodyRes = res.json();
  return bodyRes;
}
