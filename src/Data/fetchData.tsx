import React from "react";
import { base_url } from "./Base/Base_URl";
export default async function fetchData(page: number | string) {
  const response = await fetch(`${base_url}?page=${page}`);
  const resBody = await response.json();
  return resBody.results;
}
