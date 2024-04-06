"use client";
import { BASE_URL } from "@/constants/Base_URl";
import { productType } from "@/types/productTypes";
import { Dropdown, DropdownItem, Modal } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function UserTable() {
  const [productDetails, setProductDetails] = useState<productType>();
  const [openModal, setOpenModal] = useState(false);
  const [getProduct, setProduct] = useState([]);
  async function fetchData() {
    const data = await fetch(`${BASE_URL}?page_size=100`);
    const res = await data.json();
    setProduct(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
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
        const handleView = (product: productType) => {
          setProductDetails(product);
          setOpenModal(true);
        };
        return (
          <div>
            <Dropdown label="" inline>
              <DropdownItem className="text-primaryColor">
                <button
                  className="text-primaryColor "
                  onClick={() => handleView(row)}
                >
                  Product View
                </button>
              </DropdownItem>
              <DropdownItem className="text-primaryColor">Edit</DropdownItem>
              <DropdownItem className="text-red-600">Delete</DropdownItem>
            </Dropdown>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="text-2xl"> Product Details</p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex gap-10">
              <Image
                src={productDetails?.image ?? ""}
                alt={productDetails?.name || "UNKNOWN"}
                width={250}
                height={250}
                className="rounded-lg "
              />
              <div>
                <p className="text-lg font-bold">{productDetails?.name}</p>
                <p className="text-lg font-medium text-primaryColor">
                  ${productDetails?.price}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {productDetails?.desc || "No description available"}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable
        columns={columns}
        data={getProduct}
        fixedHeader={true}
        fixedHeaderScrollHeight="600px"
        selectableRows
        pagination
        subHeader
      />
    </div>
  );
}
