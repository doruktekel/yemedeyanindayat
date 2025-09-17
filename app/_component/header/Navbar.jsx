import React from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const navBarItems = [
    {
      name: "Anasayfa",
      pathName: "/",
    },
    {
      name: "Tariflerim",
      pathName: "/tariflerim",
    },
    {
      name: "Favorilerim",
      pathName: "/favorilerim",
    },
  ];
  return (
    <ul>
      {navBarItems.map((item, index) => (
        <NavbarList key={index} item={item} />
      ))}
    </ul>
  );
};

export default Navbar;
