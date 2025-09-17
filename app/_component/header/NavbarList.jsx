"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarList = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${item.pathName}`}
      className={`px-4 py-3 rounded-full text-base font-medium text-primary ${
        pathname === item.pathName ? "active" : ""
      } `}
    >
      {item.name}
    </Link>
  );
};

export default NavbarList;
