import Image from "next/image";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import NavbarList from "./NavbarList";
import Menu from "./Menu";

const Header = () => {
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
    <div>
      <div className="flex justify-end items-center gap-5 border-b ">
        <Link href="/destek" className="flex gap-2 items-center p-2">
          <IoHelpBuoyOutline />
          <span>Destek Al</span>
        </Link>
        <Link href="/iletisim" className="flex gap-2 items-center p-2">
          <FiPhone />
          <span>Iletisim</span>
        </Link>
      </div>
      <div className="flex justify-between items-center py-4">
        <figure>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </figure>

        <ul>
          {navBarItems.map((item, index) => (
            <NavbarList key={index} item={item} />
          ))}
        </ul>

        <div className="flex gap-3 items-center relative">
          <div className="flex py-3 px-4 items-center gap-1 cursor-pointer hover:bg-gray-50 rounded-full">
            <TbWorld className="text-primary" size={24} />
            <span className="text-primary font-medium text-base">Turkce</span>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
