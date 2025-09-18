"use client";

import { useEffect, useRef, useState } from "react";

const MenuContainer = ({ setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isLogin ? (
        <ul
          ref={menuRef}
          className="bg-white border border-default-border rounded-sm w-full absolute top-[52px]"
        >
          <li className="text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Profil
          </li>
          <li className="text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Tarif Defteri
          </li>
          <li className="text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Favorilerim
          </li>
          <li className="text-sm border-t border-weak-border text-[#DC2626] font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Oturumu Kapat
          </li>
        </ul>
      ) : (
        <ul
          ref={menuRef}
          className="bg-white border border-default-border rounded-sm w-full absolute top-[52px]"
        >
          <li className="text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Giris Yap
          </li>
          <li className="text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Kayit Ol
          </li>
        </ul>
      )}
    </>
  );
};

export default MenuContainer;
