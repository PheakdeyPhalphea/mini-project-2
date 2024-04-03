import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "@/public/logo.jpg";
import Link from "next/link";
export default function NavbarComponent() {
  return (
    <Navbar className="bg-secondaryColor ">
      <NavbarBrand href="#">
        <img
          src="/logo.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-primaryColor">
          Infini
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link
          href="/"
          className="text-primaryColor font-medium hover:text-primaryColor"
        >
          Home
        </Link>
        <Link
          className="text-AscendColor hover:text-primaryColor  "
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-AscendColor hover:text-primaryColor  "
          href="/dashboard"
        >
          DashBoard
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
