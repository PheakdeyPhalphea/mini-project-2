import React from "react";
import { BASE_URL } from "../constants/Base_URl";
export default async function fetchData(page: number | string) {
  const response = await fetch(`${BASE_URL}?page=2&page_size=28`);
  const resBody = await response.json();
  return resBody.results;
}
