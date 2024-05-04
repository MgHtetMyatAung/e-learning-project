import { NavLink } from "react-router-dom";
import { navItems } from "./nav-items";
import { Button } from "../../button";
import { Logo, RightArrow } from "../../../assets/icons";

export default function Header() {
  return (
    <header className=" tablet:py-3">
      <div className=" h-[40px] tablet:h-[55px] w-full tablet:w-[calc(100vw-50px)] bg-orange-8 mx-auto tablet:rounded-[8px]">
        <div className=" h-full flex items-center gap-3 justify-center">
          <p className=" text-sm tablet:text-[18px] text-white-1">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <img
            src={RightArrow}
            alt="arrow"
            className=" w-[20px] h-[20px] tablet:w-[24px] tablet:h-[24px]"
          />
        </div>
      </div>
      <nav className=" container mx-auto py-3 flex items-center justify-between">
        <div className=" flex items-center gap-[50px]">
          <img
            src={Logo}
            alt="logo"
            className=" w-[40px] tablet:w-[44px] laptop:w-[54px] h-[40px] tablet:h-[44px] laptop:h-[54px]"
          />
          <ul className=" hidden laptop:flex items-center gap-[30px]">
            {navItems.map(({ label, link }) => (
              <NavLink key={label} to={link} className=" tablet:text-lg">
                {label}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* buttons  */}
        <div className="">
          <Button label={"Sign Up"} />
          <Button label={"Login"} className={" bg-orange-8 text-white-1"} />
        </div>
      </nav>
    </header>
  );
}
