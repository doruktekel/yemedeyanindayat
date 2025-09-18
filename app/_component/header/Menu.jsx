"use client";

import { useState } from "react";
import { LiaGripLinesSolid } from "react-icons/lia";
import MenuContainer from "./MenuContainer";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="flex py-3 px-4 items-center gap-1 cursor-pointer hover:bg-gray-50 rounded-full border-default-border border"
        onClick={handleSetOpen}
      >
        <LiaGripLinesSolid className="text-primary" size={24} />
        <span className="text-primary font-medium text-base">Giris Yap</span>
      </div>
      {isOpen && <MenuContainer setIsOpen={setIsOpen} />}
    </>
  );
};

export default Menu;
