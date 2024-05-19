import { useState } from "react";
import { CloseIcon, MenuIcon } from "../../../assets/icons";
import { navItems } from "./nav-items";
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className=" laptop:hidden">
      <img src={MenuIcon} alt="menu" onClick={() => setOpenMenu(true)} />
      <nav
        className={`fixed w-full h-[calc(100vh-40px)] tablet:h-[calc(100vh-55px)] bottom-0 ${
          openMenu ? "right-0" : "right-[-100%]"
        } bg-orange-8 transition-all duration-500`}
      >
        <ul className=" h-full flex items-center flex-col gap-7 mt-[100px]">
          {navItems.map(({ label, link }) => (
            <li key={label}>
              <NavLink to={link} className={" text-lg text-white-1"}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className=" absolute right-5 top-5 tablet:right-10"
          onClick={() => setOpenMenu(false)}
        >
          <img src={CloseIcon} alt="close" />
        </button>
      </nav>
    </div>
  );
}