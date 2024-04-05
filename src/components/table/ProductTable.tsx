"use client";
import { BASE_URL } from "@/constants/Base_URl";
import { productType } from "@/types/productTypes";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

const columns: TableColumn<productType>[] = [
  {
    name: "ID",
    selector: (row) => row.id || "",
  },
  {
    name: "Seller",
    selector: (row) => row.seller || "",
  },
  {
    name: "Name",
    selector: (row) => row.name || "",
  },
  {
    name: "Category",
    selector: (row) => row.category || "",
  },
  {
    name: "Image",
    selector: (row): any => (
      <img src={row.image} width={100} height={100} alt="user" />
    ),
  },
  {
    name: "Action",
    selector: (row): any => {
      return (
        <div>
          <Dropdown label="" inline>
            <DropdownItem className="text-primaryColor">
              View Detail
            </DropdownItem>
            <DropdownItem className="text-primaryColor">Edit</DropdownItem>
            <DropdownItem className="text-red-600">Delete</DropdownItem>
          </Dropdown>
        </div>
      );
    },
  },
];

export default function UserTable() {
  const [getProduct, setProduct] = useState([]);
  async function fetchData() {
    const data = await fetch(`${BASE_URL}?page_size=100`);
    const res = await data.json();
    setProduct(res.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={getProduct}
      fixedHeader={true}
      fixedHeaderScrollHeight="600px"
      selectableRows
      pagination
      subHeader
      actions={
        <Button size="sm" className="bg-primaryColor">
          Export PDF
        </Button>
      }
    />
  );
}
