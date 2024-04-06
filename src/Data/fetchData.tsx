import { BASE_URL } from "../constants/Base_URl";
export default async function fetchData() {
  const response = await fetch(`${BASE_URL}?page_size=20`);
  const resBody = await response.json();
  return resBody.results;
}
